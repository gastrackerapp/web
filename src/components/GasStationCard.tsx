import "./GasStationCard.css";
import repsol from "./images/REPSOL.png";

type GasStation = {
    label: string;
    latitude: number;
    longitude: number;
    direction: string;
    fuelType: string;
    fuelPrice: number;
};

export default function GasStationCard(gasStation: GasStation) {
    const direction : string = "https://maps.google.com/maps?q="+gasStation.direction
  return (
    <div className="vinetapadre">
      <div className="imagecenter">
        <img className="gasStationLogo" src={repsol}></img>
      </div>
      <div className="vinetahija">
        <h1 className="marca">{gasStation.label} </h1>
        <p className="combustible"> Diesel: 294€ </p>
        <p className="direccion"> Direccion: blablabla numero 2</p>
        <a
          href={direction}
          className="boton"
        >
          Ir
        </a>
      </div>
    </div>
  );
}
