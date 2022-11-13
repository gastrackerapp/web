import { useLocation } from "react-router-dom";
import "./App.css";
import GasStationCard from "./components/GasStationCard";
import useStation from "./hooks/useStation";

export default function Stations() {
  const search = useLocation().search;
  const IDCCAA = new URLSearchParams(search).get("IDCCAA");
  const IDPROVINCIA = new URLSearchParams(search).get("IDPROVINCIA");
  const IDMUNICIPIO = new URLSearchParams(search).get("IDMUNICIPIO");
  const IDPRODUCTO = new URLSearchParams(search).get("IDPRODUCTO");
  const EESS = new URLSearchParams(search).get("IDEESS");
  const Stations = useStation(IDMUNICIPIO, IDPRODUCTO);
  if (
    IDCCAA != null &&
    IDPROVINCIA != null &&
    IDMUNICIPIO != null &&
    IDPRODUCTO != null &&
    EESS != null
  ) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Stations</h1>
        </header>
        <body>
          {Stations.map((Station) => {
            if (
              Station.Rótulo.search(EESS.toUpperCase()) != -1 ||
              EESS === "-"
            ) {
              return <GasStationCard gasStation={Station} />;
            }
          })}
        </body>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Stations</h1>
        </header>
        <body>
          <h1>Not found</h1>
        </body>
      </div>
    );
  }
}
