// Fichero src/components/App.jsx
import "../styles/App.scss";
import getDataFromApi from "../services/api";
import { useState, useEffect } from "react";
import ListCharacter from "./ListCharacter";
import Filter from "./Filter";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import PageNotFound from "./PageNotFound";

function App() {
  //Variable de estado
  const [charactersList, setCharactersList] = useState([]);
  const [inputName, setInputName] = useState("");

  //FUNCIONES
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

  //useParams (?)

//   const getInfo = (position) => {
//     const characterFound = charactersList[parseInt(position)];
//     return characterFound;
//   }

const getInfo = (id) => {
    const characterFound = charactersList[parseInt(id)];
    return characterFound;
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter setInputName={setInputName} />
              <ListCharacter charactersList={filteredList} />
            </>
          }
        />
        <Route path="/character/:characterId" element={<CharacterDetail getInfo={getInfo} />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
