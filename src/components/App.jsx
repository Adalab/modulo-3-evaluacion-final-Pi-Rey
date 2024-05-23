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

  //FUNCIONES

  //resetear el valor del input
  const reset =()=>setInputName("");

  //guardar la api en la variable de estado
  useEffect(() => {
    getDataFromApi().then((newArray) => {
      setCharactersList(newArray);
    });
  }, []);

  //filtrar por nombre
  const filteredList = charactersList.filter((character) =>
    character.name.toLowerCase().includes(inputName.toLowerCase())
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
              <Filter setInputName={setInputName} inputName={inputName} reset={reset}/>
              <ListCharacter charactersList={filteredList} inputName={inputName} />
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
