import { useState, useEffect } from "react";
import { Routes, Route, matchPath, useLocation } from "react-router-dom";
import "../styles/App.scss";
import getDataFromApi from "../services/api";
import ListCharacter from "./ListCharacter";
import Filter from "./Filter";
import Header from "./Header";
import PageNotFound from "./PageNotFound";
import CharacterDetail from "./CharacterDetail";
import Footer from "./Footer";

function App() {
  //Variables de estado
  const [charactersList, setCharactersList] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputSpecies, setInputSpecies] = useState("");
  const [inputArrayPlanet, setInputArrayPlanet] = useState([]);

  //FUNCIONES

  //resetear el valor del input
  const reset = () => {
    setInputName("");
    setInputSpecies("");
    setInputArrayPlanet([]);
  };

  //guardar la api en la variable de estado
  useEffect(() => {
    getDataFromApi().then((arr) => {
      setCharactersList(arr);
    });
    console.log(charactersList);
  }, []);

  //obtener los planetas
  const getPlanet = () => {
    const planets = charactersList.map((char) => char.planet);
    const uniquePlanetsObj = new Set(planets);
    const uniquePlanetsArr = [...uniquePlanetsObj];
    return uniquePlanetsArr;
  };
  //actualizar inputPlanet
  const updatePlanets = (value) => {
    if (inputArrayPlanet.includes(value)) {
      const newArrayPlanet = inputArrayPlanet.filter(
        (planet) => planet !== value
      );
      setInputArrayPlanet(newArrayPlanet);
    } else {
      setInputArrayPlanet([...inputArrayPlanet, value]);
    }
  };

  //filtrar por nombre, especie, planeta
  const filteredList = charactersList
    .filter((character) =>
      character.name.toLowerCase().includes(inputName.toLowerCase())
    )
    .filter((character) =>
      inputSpecies ? inputSpecies === character.species : true
    )
    .filter((character) => {
      if (inputArrayPlanet.length === 0) {
        return true;
      } else {
        return inputArrayPlanet.includes(character.planet);
      }
    });

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
                getPlanet={getPlanet}
                updatePlanets={updatePlanets}
                inputArrayPlanet={inputArrayPlanet}
              />
              <ListCharacter
                charactersList={filteredList}
                inputName={inputName}
                inputSpecies={inputSpecies}
                inputArrayPlanet={inputArrayPlanet}
              />
            </>
          }
        />
        <Route
          path="/character/:characterId"
          element={<CharacterDetail charDetail={charDetail} reset={reset} />}
        />
        <Route path="*" element={<PageNotFound reset={reset} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
