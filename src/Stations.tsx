import { useLocation } from "react-router-dom";
import "./App.css";

export default function Stations() {
  const search = useLocation().search;
  const IDCCAA = new URLSearchParams(search).get("IDCCAA");
  const IDPROVINCIA = new URLSearchParams(search).get("IDPROVINCIA");
  const IDMUNICIPIO = new URLSearchParams(search).get("IDMUNICIPIO");
  const IDPRODUCTO = new URLSearchParams(search).get("IDPRODUCTO");
  const IDEESS = new URLSearchParams(search).get("IDEESS");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stations</h1>
      </header>
      <body>
          <p>CCAA: {IDCCAA}</p>
          <p>Provincia: {IDPROVINCIA}</p>
          <p>Municipio: {IDMUNICIPIO}</p>
          <p>Producto: {IDPRODUCTO}</p>
          <p>EESS: {IDEESS}</p>
      </body>
    </div>
  );
}
