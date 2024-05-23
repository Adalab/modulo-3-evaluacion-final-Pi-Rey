import PropTypes from "prop-types";


function Character({character}) {
  return (
    <article className="article">
        <h3>{character.name}</h3>
        <img className="article--img" src={character.img} alt={character.name} />
        <p>{character.species}</p>
    </article>
  )
}

Character.propTypes = {
    character: PropTypes.object
}
export default Character