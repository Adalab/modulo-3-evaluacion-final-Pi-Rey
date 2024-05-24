import PropTypes from "prop-types";
function FilterByName({ setInputName, inputName }) {
  return (
    <form
      className="inputname"
      action=""
      onSubmit={(ev) => ev.preventDefault()}
    >
      <label className="inputname--label" htmlFor="nameSearch">
        Introduce el nombre de un personaje:
      </label>
      <input
        className="inputname--text"
        type="text"
        name="nameSearch"
        id="nameSearch"
        placeholder="Morty Smith"
        value={inputName}
        onChange={(ev) => setInputName(ev.target.value)}
      />
    </form>
  );
}

FilterByName.propTypes = {
  setInputName: PropTypes.func,
  inputName: PropTypes.string,
};

export default FilterByName;
