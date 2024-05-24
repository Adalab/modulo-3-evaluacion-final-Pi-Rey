import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import rickBN from "../images/rickBN.jpeg"
function PageNotFound({ reset }) {
  return (
    <section className="page404">
        <img className="page404--img" src={rickBN} alt="imagen de Rick Sánchez en blanco y negro" />
        <p>¡Ups! La página que buscas no existe en esta realidad. </p>
      <Link to="/">
        <button className="page404--btn" onClick={reset}>
          Volver a la página principal
        </button>
      </Link>
    </section>
  );
}

PageNotFound.propTypes = {
  reset: PropTypes.func,
};

export default PageNotFound;
