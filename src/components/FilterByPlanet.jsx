import PropTypes from "prop-types";
function FilterByPlanet({ planets, updatePlanets, inputArrayPlanet }) {
  return (
    <form action="" onSubmit={(ev) => ev.preventDefault()}>
      {planets.map((planet, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              name=""
              id={i}
              value={planet}
              onChange={(ev) => {
                updatePlanets(ev.target.value);
              }}
            checked = {inputArrayPlanet.includes(planet)}
            />
            <label htmlFor="">{planet}</label>
          </div>
        );
      })}
    </form>
  );
}

FilterByPlanet.propTypes = {
  planets: PropTypes.array,
  updatePlanets: PropTypes.func,
  inputArrayPlanet: PropTypes.string,
};

export default FilterByPlanet;
