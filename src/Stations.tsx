import React from "react";
import { useLocation } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

export default function Stations() {
  const search = useLocation().search;
  const IDCCAA = new URLSearchParams(search).get("IDCCAA");
  const IDPROVINCIA = new URLSearchParams(search).get("IDPROVINCIA");
  const IDMUNICIPIO = new URLSearchParams(search).get("IDMUNICIPIO");
  const IDPRODUCTO = new URLSearchParams(search).get("IDPRODUCTO");
  const SS = new URLSearchParams(search).get("SS");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Stations</p>
        <p>IDMUNICIPIO: {IDMUNICIPIO}</p>
        <p>IDPRODUCTO: {IDPRODUCTO}</p>
      </header>
    </div>
  );
}
