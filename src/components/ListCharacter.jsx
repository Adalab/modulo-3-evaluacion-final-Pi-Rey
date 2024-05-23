import PropTypes from "prop-types";
import Character from "./Character";

function ListCharacter({ charactersList, inputName }) {
  const html = charactersList.map((character) => (
    <Character key={character.id} character={character} />
  ));
  return (
    // <section className="sectionList" >{html}</section>
    <section className="sectionList">
      {charactersList.length === 0
        ? (        <p className="sectionList--message">
        No hay ningún personaje que coincida con la palabra: <span className="sectionList--input">{inputName}</span>
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
};
export default ListCharacter;
