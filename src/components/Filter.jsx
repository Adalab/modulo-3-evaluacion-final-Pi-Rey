import FilterByName from "./FilterByName";
import PropTypes from "prop-types";
import FilterBySpecies from "./FilterBySpecies";

function Filter({
  setInputName,
  inputName,
  inputSpecies,
  setInputSpecies,
  reset,
}) {
  return (
    <fieldset className="fieldset">
      <FilterByName setInputName={setInputName} inputName={inputName} />
      <FilterBySpecies
        inputSpecies={inputSpecies}
        setInputSpecies={setInputSpecies}
      />
      <button className="fieldset--btn" onClick={reset}>
        Reset
      </button>
    </fieldset>
  );
}

Filter.propTypes = {
  setInputName: PropTypes.func,
  inputName: PropTypes.string,
  reset: PropTypes.func,
  inputSpecies: PropTypes.string,
  setInputSpecies: PropTypes.func
};

export default Filter;
