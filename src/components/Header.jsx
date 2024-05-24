import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import headerImg from "../images/header_image.png";

function Header({ reset }) {
  return (
    <header className="header">
      <Link to="/" onClick={reset}>
        <img
          className="header--img"
          src={headerImg}
          alt="logo de la serie Rick and Morty"
        />
      </Link>
    </header>
  );
}

Header.propTypes = {
  reset: PropTypes.func,
};

export default Header;
