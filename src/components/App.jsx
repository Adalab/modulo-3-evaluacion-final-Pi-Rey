// Fichero src/components/App.jsx
import "../styles/App.scss";
import headerImg from "../images/header_image.png";
import getDataFromApi from "../services/api";
import { useState, useEffect } from "react";

function App() {
  //Variable de estado
  const [charactersList, setCharactersList] = useState([]);

  //Funciones

  useEffect(() => {
    //recuerda que getDataFromApi te devuelve una promesa, por eso escribo .then
    getDataFromApi().then((newArray) => {
      setCharactersList(newArray);
    });
  }, []);
  return (
    <>
      <header>
        <img className="header--img" src={headerImg} alt="" />
      </header>
      <h1>Hola mundo</h1>
    </>
  );
}

export default App;
