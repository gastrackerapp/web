import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import {Routes, Route, useNavigate} from 'react-router-dom';
import logo from './images/logo.png'
import useCCAA from "./hooks/useCCAA";
export default function Home() {
  const getInitialState = () => {
    const value = "Orange";
    return value;
  };

  const [value, setValue] = useState(getInitialState);
  const CCAA = useCCAA()
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  let navigate = useNavigate();
  const navigateHome = (value:string) => {
    navigate('/stations?IDMUNICIPIO='+value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-image" alt="logo" />
      </header>
      <body className="App-body">
        <div className="App-bodycolumn">
      <div className="Form-block">
          <p className="Form-title"><b><i>COMUNIDAD AUTÓNOMA</i></b></p>
          <select value={value} onChange={handleChange}>
            <option value="Orange">Orange</option>
            <option value="Radish">Radish</option>
            <option value="Cherry">Cherry</option>
          </select>
        </div>
        <div className="Form-block">
          <p className="Form-title"><b><i>PROVINCIA</i></b></p>
          <select value={value} onChange={handleChange}>
            <option value="Orange">Orange</option>
            <option value="Radish">Radish</option>
            <option value="Cherry">Cherry</option>
          </select>
        </div>
        <div>
          <p className="Form-title"><b><i>MUNICIPIO</i></b></p>
          <select value={value} onChange={handleChange}>
            <option value="Orange">Orange</option>
            <option value="Radish">Radish</option>
            <option value="Cherry">Cherry</option>
          </select>
        </div>
        <div>
          <p className="Form-title"><b><i>COMBUSTIBLE</i></b></p>
          <select value={value} onChange={handleChange}>
            <option value="Orange">Orange</option>
            <option value="Radish">Radish</option>
            <option value="Cherry">Cherry</option>
          </select>
        </div>
        <div>
          <p className="Form-title"><b><i>ESTACIÓN DE SERVICIO</i></b></p>
          <select value={value} onChange={handleChange}>
            <option value="Orange">Orange</option>
            <option value="Radish">Radish</option>
            <option value="Cherry">Cherry</option>
          </select>
        </div>
        <br></br>
        <div>
          <button className="App-button" onClick={() => navigateHome(value)}><b><i>BUSCAR</i></b></button>
        </div>
        </div>
      </body>
    </div>
  );
}
