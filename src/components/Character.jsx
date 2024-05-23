import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Character({ character }) {
  return (
    <article className="article">
      <Link to={"/character/" + character.id} className="article--link">
        <h3>{character.name}</h3>
        <img
          className="article--img"
          src={character.img}
          alt={character.name}
        />
        <p>{character.species}</p>
      </Link>
    </article>
  );
}

Character.propTypes = {
  character: PropTypes.object,
};
export default Character;
