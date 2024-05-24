import PropTypes from "prop-types";
import Character from "./Character";

function ListCharacter({
  charactersList,
  inputName,
  inputSpecies,
  inputArrayPlanet,
}) {
  const html = charactersList.map((character) => (
    <Character key={character.id} character={character} />
  ));
  const error1 = inputName === "" ? "" : " con la palabra:";
  const error2 = inputName === "" ? "" : " y/o ";
  return (
    <section className="sectionList">
      {charactersList.length === 0 ? (
        <p className="sectionList--message">
            No hay ningún personaje que coincida 
         {error1 + " "}
          <span className="sectionList--input">{inputName} </span> {error2}con los filtros seleccionados <br />{" "}
          <span className="sectionList--input">{inputSpecies}</span>
          <span className="sectionList--input">
            {inputArrayPlanet.map((item, i) => (
              <span key={i}>
                <br /> {item} <br />
              </span>
            ))}
          </span>
        </p>
      ) : (
        html
      )}
    </section>
  );
}

ListCharacter.propTypes = {
  charactersList: PropTypes.array,
  inputName: PropTypes.string,
  inputSpecies: PropTypes.string,
  inputArrayPlanet: PropTypes.array,
};
export default ListCharacter;
