import { useState, useEffect } from "react";
import { Routes, Route, matchPath, useLocation } from "react-router-dom";
import "../styles/App.scss";
import getDataFromApi from "../services/api";
import ListCharacter from "./ListCharacter";
import Filter from "./Filter";
import Header from "./Header";
import PageNotFound from "./PageNotFound";
import CharacterDetail from "./CharacterDetail";

function App() {
  //Variable de estado
  const [charactersList, setCharactersList] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputSpecies, setInputSpecies] = useState("");

  //FUNCIONES

  //resetear el valor del input
  const reset = () => {
    setInputName("");
    setInputSpecies("")
  };

  //guardar la api en la variable de estado
  useEffect(() => {
    getDataFromApi().then((arr) => {
      setCharactersList(arr);
    });
    console.log(charactersList);
  }, []);

  //filtrar por nombre, especie
  const filteredList = charactersList
    .filter((character) =>
      character.name.toLowerCase().includes(inputName.toLowerCase())
    )
    .filter((character) =>
      inputSpecies ? inputSpecies === character.species : true
    );

  //conseguir el id de la ruta dinámica y almacenarlo si corresponde con un character
  const { pathname } = useLocation();
  console.log(pathname);
  const characterRoute = matchPath("/character/:characterId", pathname);
  const characterIdUrl = characterRoute
    ? characterRoute.params.characterId
    : null;
  console.log(typeof characterIdUrl);
  const charDetail = charactersList.find(
    (character) => character.id === parseInt(characterIdUrl)
  );
  console.log(charDetail);

  return (
    <>
      <Header reset={reset} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter
                setInputName={setInputName}
                inputName={inputName}
                inputSpecies={inputSpecies}
                setInputSpecies={setInputSpecies}
                reset={reset}
              />
              <ListCharacter
                charactersList={filteredList}
                inputName={inputName}
              />
            </>
          }
        />
        <Route
          path="/character/:characterId"
          element={<CharacterDetail charDetail={charDetail} reset={reset} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
