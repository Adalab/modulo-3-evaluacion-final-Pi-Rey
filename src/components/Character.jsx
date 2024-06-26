import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Character({ character }) {
  const hidden = character.status !== "Muerto" ? "hidden" : "";
  return (
    <article className="article">
      <Link to={"/character/" + character.id} className="article--link">
        <h3 className="article--h3">
          {character.name}
          <span className={`article--span ${hidden}`}> 💀</span>
        </h3>
        <img
          className="article--img"
          src={character.img}
          alt={character.name}
        />
        <p className="article--p">{character.species}</p>
      </Link>
    </article>
  );
}

Character.propTypes = {
  character: PropTypes.object,
};
export default Character;
