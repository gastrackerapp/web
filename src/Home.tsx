import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import {Routes, Route, useNavigate} from 'react-router-dom';
export default function Home() {
  const getInitialState = () => {
    const value = "Orange";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

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
        <div>
          <select value={value} onChange={handleChange}>
            <option value="Orange">Orange</option>
            <option value="Radish">Radish</option>
            <option value="Cherry">Cherry</option>
          </select>
          <p>{`You selected ${value}`}</p>
        </div>
        <button onClick={() => navigateHome(value)}>Home</button>
      </header>
    </div>
  );
}
