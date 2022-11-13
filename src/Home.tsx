import "./App.css";
import logo from "./images/logo.png";
import GasStationForm from "./components/GasStationForm"



export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-image" alt="logo" />
      </header>
      <body className="App-body">
        <div className="App-bodycolumn">
          <GasStationForm/>
        </div>
      </body>
    </div>
  );
}
