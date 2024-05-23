import PropTypes from "prop-types";
import Character from "./Character";

function ListCharacter({charactersList}) {

    const html = charactersList.map((character)=> <Character key={character.id} character={character} />)
  return (
    <section className="sectionList" >{html}</section>
  )
}


ListCharacter.propTypes ={
    charactersList: PropTypes.array
}
export default ListCharacter