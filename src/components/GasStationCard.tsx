import "./GasStationCard.css";
import logo from "./images/logo.png";

export default function GasStationCard(gasStation: any) {
  gasStation = gasStation.gasStation;
  const direction: string =
    "https://www.google.com/maps/search/?api=1&query=" +
    gasStation.Latitud.replace(",", ".") +
    "%2C" +
    gasStation.Longitud.replace(",", ".");
  return (
    <div className="GasStationCard">
        <img className="GasStationLogo" src={logo}></img>
      <div className="GasStationInfo">
        <div className="CardFirstRow">
          <p className="GasStationLabel">{gasStation.Rótulo} </p>
          <p className="GasStationFuelPrice"> <b>Precio:</b> {gasStation.PrecioProducto} </p>
        </div>
        <div className="CardSecondRow">
          <p className="GasStationAddress"> <b>Direccion:</b> {gasStation.Dirección}</p>
        </div>
        <div className="CardThirdRow">
          <a href={direction} className="GasStationButton">
            <b>
              <i>IR</i>
            </b>
          </a>
        </div>
      </div>
    </div>
  );
}
