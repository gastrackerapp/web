import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import logo from "./images/logo.png";
import useCCAA from "./hooks/useCCAA";
import useProvincia from "./hooks/useProvincia";
import useMunicipio from "./hooks/useMunicipio";
import useProducto from "./hooks/useProducto";

export default function Home() {
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-image" alt="logo" />
      </header>
      <body className="App-body">
        <div className="App-bodycolumn">
          <a>CCAA: {IDCCAA}</a>
          <a>Provincia: {IDProvincia}</a>
          <a>Municipio: {IDMunicipio}</a>
          <a>Producto: {IDProducto}</a>
          <a>EESS: {IDEESS}</a>
          <div className="Form-block">
            <p className="Form-title">
              <b>
                <i>COMUNIDAD AUTÓNOMA</i>
              </b>
            </p>
            <select value={IDCCAA} onChange={handleCCAAChange}>
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
            <select value={IDProvincia} onChange={handleProvinciaChange}>
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
            <select value={IDMunicipio} onChange={handleMunicipioChange}>
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
            <select value={IDProducto} onChange={handleProductoChange}>
            <option value={"-"}>Todos</option>;
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
            <select value={IDEESS} onChange={handleEESSChange}>
            <option value={"-"}>Todos</option>;
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
            <button className="App-button" onClick={() => searchStations(IDCCAA, IDProvincia, IDMunicipio, IDProducto, IDEESS)}>
              <b>
                <i>BUSCAR</i>
              </b>
            </button>
          </div>
        </div>
      </body>
    </div>
  );
}
