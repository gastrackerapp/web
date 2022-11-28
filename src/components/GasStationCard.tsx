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
      <div className="GasStationLogo">
        <img className="GasStationImage" src={logo}></img>
      </div>
      <div className="GasStationInfo">
        <p className="GasStationLabel">{gasStation.Rótulo} </p>
        <p className="GasStationFuelPrice"> <b>Precio:</b> {gasStation.PrecioProducto} </p>
        <p className="GasStationAddress"> <b>Direccion:</b> {gasStation.Dirección}</p>
        <a href={direction} className="GasStationButton">
        <b>
            <i>IR</i>
          </b>
        </a>
      </div>
    </div>
  );
}
