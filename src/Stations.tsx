import React from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import GasStationCard from "./components/GasStationCard"

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
        <p>Stations</p>
        <p>IDMUNICIPIO: {IDMUNICIPIO}</p>
        <p>IDPRODUCTO: {IDPRODUCTO}</p>
        <GasStationCard name={IDMUNICIPIO}/>
      </header>
    </div>
  );
}
