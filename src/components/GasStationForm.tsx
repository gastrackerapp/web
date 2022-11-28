import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCCAA from "../hooks/useCCAA";
import useProvincia from "../hooks/useProvincia";
import useMunicipio from "../hooks/useMunicipio";
import useProducto from "../hooks/useProducto";
import "./GasStationForm.css";

export default function GasStationForm() {
    const getIDCCAAInitialState = () => {
        const IDCCAA = "01";
        return IDCCAA;
      };
    
      const [IDCCAA, setIDCCAA] = useState(getIDCCAAInitialState);
      const CCAAS = useCCAA();
      const handleCCAAChange = (e: any) => {
        setIDCCAA(e.target.value);
        setIDProvincia("-");
        setIDMunicipio("-");
      };
    
      
      const getIDProvinciaInitialState = () => {
        const IDProvincia = "-";
        return IDProvincia;
      };
      
      const [IDProvincia, setIDProvincia] = useState(getIDProvinciaInitialState);
      const Provincias = useProvincia(IDCCAA);
      const handleProvinciaChange = (e: any) => {
        setIDProvincia(e.target.value);
        setIDMunicipio("-");
      };
    
      const getIDMunicipioInitialState = () => {
        const IDMunicipio = "-";
        return IDMunicipio;
      };
      
      const [IDMunicipio, setIDMunicipio] = useState(getIDMunicipioInitialState);
      const Municipios = useMunicipio(IDProvincia);
      const handleMunicipioChange = (e: any) => {
        setIDMunicipio(e.target.value);
      };
    
      const getIDProductoInitialState = () => {
        const IDProducto = "-";
        return IDProducto;
      };
      
      const [IDProducto, setIDProducto] = useState(getIDProductoInitialState);
      const Productos = useProducto();
      const handleProductoChange = (e: any) => {
        setIDProducto(e.target.value);
      };
    
      const getIDEESSInitialState = () => {
        const IDEESS = "-";
        return IDEESS;
      };
      
      const [IDEESS, setIDEESS] = useState(getIDEESSInitialState);
      const handleEESSChange = (e: any) => {
        setIDEESS(e.target.value);
      };
    
      let navigate = useNavigate();
      const searchStations = (IDCCAA: string, IDProvincia: string, IDMunicipio: string, IDProducto: string, IDEESS: string) => {
        navigate("/stations?IDCCAA=" + IDCCAA + "&IDPROVINCIA=" + IDProvincia + "&IDMUNICIPIO=" + IDMunicipio + "&IDPRODUCTO=" + IDProducto + "&IDEESS=" + IDEESS);
      };

      return (
        <React.Fragment>
      <div className="Form-block">
        <p className="Form-title">
          <b>
            <i>COMUNIDAD AUTÓNOMA</i>
          </b>
        </p>
        <select value={IDCCAA} className="Form-select" onChange={handleCCAAChange}>
          {CCAAS.map((CCAA) => {
            return <option value={CCAA.IDCCAA}>{CCAA.CCAA}</option>;
          })}
        </select>
      </div>
      <div className="Form-block">
        <p className="Form-title">
          <b>
            <i>PROVINCIA</i>
          </b>
        </p>
        <select value={IDProvincia} className="Form-select" onChange={handleProvinciaChange}>
        <option value={"-"}>-</option>;
          {Provincias.map((Provincia) => {
            return <option value={Provincia.IDPovincia}>{Provincia.Provincia.charAt(0)+Provincia.Provincia.slice(1).toLowerCase()}</option>;
          })}
        </select>
      </div>
      <div className="Form-block">
        <p className="Form-title">
          <b>
            <i>MUNICIPIO</i>
          </b>
        </p>
        <select value={IDMunicipio} className="Form-select" onChange={handleMunicipioChange}>
        <option value={"-"}>-</option>;
          {Municipios.map((Municipio) => {
            return <option value={Municipio.IDMunicipio}>{Municipio.Municipio}</option>;
          })}
        </select>
      </div>
      <div className="Form-block">
        <p className="Form-title">
          <b>
            <i>COMBUSTIBLE</i>
          </b>
        </p>
        <select value={IDProducto} className="Form-select" onChange={handleProductoChange}>
        <option value={"-"}>-</option>;
          {Productos.map((Producto) => {
            return <option value={Producto.IDProducto}>{Producto.NombreProducto}</option>;
          })}
        </select>
      </div>
      <div className="Form-block">
        <p className="Form-title">
          <b>
            <i>ESTACIÓN DE SERVICIO</i>
          </b>
        </p>
        <select value={IDEESS} className="Form-select" onChange={handleEESSChange}>
        <option value={"-"}>-</option>;
          <option value={"BP"}>BP</option>;
          <option value={"CEPSA"}>Cepsa</option>;
          <option value={"GALP"}>Galp</option>;
          <option value={"PETRONOR"}>Petronor</option>;
          <option value={"PLENOIL"}>Plenoil</option>;
          <option value={"REPSOL"}>Repsol</option>;
        </select>
      </div>
      <br></br>
      <div>
        <button className="Form-button" onClick={() => searchStations(IDCCAA, IDProvincia, IDMunicipio, IDProducto, IDEESS)}>
          <b>
            <i>BUSCAR</i>
          </b>
        </button>
      </div>
      </React.Fragment>
      );
}