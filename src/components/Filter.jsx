import FilterByName from "./FilterByName";
import PropTypes from "prop-types";
import FilterBySpecies from "./FilterBySpecies";
import FilterByPlanet from "./FilterByPlanet";

function Filter({
  setInputName,
  inputName,
  inputSpecies,
  setInputSpecies,
  reset,
  getPlanet,
  updatePlanets,
  inputArrayPlanet,
}) {
  return (
    <fieldset className="fieldset">
      <FilterByName setInputName={setInputName} inputName={inputName} />
      <FilterBySpecies
        inputSpecies={inputSpecies}
        setInputSpecies={setInputSpecies}
      />
      <FilterByPlanet
        planets={getPlanet()}
        updatePlanets={updatePlanets}
        inputArrayPlanet={inputArrayPlanet}
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
  setInputSpecies: PropTypes.func,
  getPlanet: PropTypes.func,
  updatePlanets: PropTypes.func,
  inputArrayPlanet: PropTypes.string,
};

export default Filter;
