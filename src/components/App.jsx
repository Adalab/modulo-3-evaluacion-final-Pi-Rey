// Fichero src/components/App.jsx
import "../styles/App.scss";
import headerImg from "../images/header_image.png";
import getDataFromApi from "../services/api";
import { useState, useEffect } from "react";
import ListCharacter from "./ListCharacter";
import Filter from "./Filter";

function App() {
  //Variable de estado
  const [charactersList, setCharactersList] = useState([]);
  const [inputName, setInputName] = useState("");

  //FUNCIONES
  //guardar la api en la variable de estado
  useEffect(() => {
    //recuerda que getDataFromApi te devuelve una promesa, por eso escribo .then
    getDataFromApi().then((newArray) => {
      setCharactersList(newArray);
    });
  }, []);

  //filtrar por nombre
  const filteredList = charactersList.filter((character)=> character.name.toLowerCase().includes(inputName.toLowerCase())
  )

  return (
    <>
      <header>
        <img className="header--img" src={headerImg} alt="" />
      </header>
      <Filter setInputName={setInputName} />
      <ListCharacter charactersList={filteredList} />
    </>
  );
}

export default App;
