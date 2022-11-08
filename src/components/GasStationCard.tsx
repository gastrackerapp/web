import "./GasStationCard.css";
import repsol from './images/REPSOL.png'

export default function GasStationCard(props:any) {
    return (
      <div className="vinetapadre">
      <div className="imagecenter">
          <img src={repsol}></img>  
      </div>
      <div className="vinetahija">
          <h1 className="marca">{props.name} </h1>
          <p className="combustible"> Diesel: 294€ </p>
          <p className="direccion"> Direccion: blablabla numero 2</p>
          <a href="#" className="boton">Ir</a>
      </div>
  </div>
  
  );
}