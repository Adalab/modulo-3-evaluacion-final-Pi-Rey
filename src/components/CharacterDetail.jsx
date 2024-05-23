import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function CharacterDetail({ charDetail, reset }) {
  //TODO: cambiar el estilo en estas tarjetas

  return (
    <section className="characterdetail">
      <article className="characterdetail--article">
        <h3>{charDetail.name}</h3>
        <img
          className="characterdetail--article__img"
          src={charDetail.img}
          alt={charDetail.name}
        />
        <p>Especie: {charDetail.species}</p>
        <p>
          Planeta de origen:{" "}
          {charDetail.planet === "unknown"
            ? "Dato desconocido"
            : charDetail.planet}
        </p>
        <p>Número de episodios en que aparece: {charDetail.episodes}</p>
        <p>Estatus vital: {charDetail.status}</p>
      </article>
      <Link to="/">
        <button className="characterdetail--btn">Volver a la búsqueda</button>
      </Link>
      <Link to="/">
        <button className="characterdetail--btn" onClick={reset}>Lista completa</button>
      </Link>
    </section>
  );
}

CharacterDetail.propTypes = {
  charDetail: PropTypes.object,
  reset: PropTypes.func,
};

export default CharacterDetail;
