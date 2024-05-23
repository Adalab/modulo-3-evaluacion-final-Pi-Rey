import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import pickleImg from "../images/pickle_ricks.png"
function CharacterDetail({ charDetail, reset }) {
  //TODO: cambiar el estilo en estas tarjetas
  //<p className="characterdetail--article__cross">x</p>
  console.log(reset);
  return charDetail ? (
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
        <button className="characterdetail--btn" onClick={reset}>
          Lista completa
        </button>
      </Link>
    </section>
  ) : (
    <section className="characterdetail">
      <article className="characterdetail--article">
      <h3>Personaje no encontrado</h3>
        <img
          className="characterdetail--article__img"
          src={pickleImg}
          alt="personas haciendo cosplay de Pickle Rick"
        />
      </article>

      <Link to="/">
        <button className="characterdetail--btn" onClick={reset}>
          Ir a la lista completa
        </button>
      </Link>
    </section>
  );
}

CharacterDetail.propTypes = {
  charDetail: PropTypes.object,
  reset: PropTypes.func,
};

export default CharacterDetail;
