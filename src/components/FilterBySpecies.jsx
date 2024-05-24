import PropTypes from "prop-types";

function FilterBySpecies({ inputSpecies, setInputSpecies }) {
  return (
    <form action="" onSubmit={(ev) => ev.preventDefault()}>
      <select
        className="inputspecies"
        name="speciesInput"
        id="speciesInput"
        onChange={(ev) => setInputSpecies(ev.target.value)}
        value={inputSpecies}
      >
        <option className="inputspecies--opt" value="">
          Muestra todos
        </option>
        <option className="inputspecies--opt" value="Humano">
          Humano
        </option>
        <option className="inputspecies--opt" value="Alienígena">
          Alienígena
        </option>
      </select>
    </form>
  );
}

FilterBySpecies.propTypes = {
  inputSpecies: PropTypes.string,
  setInputSpecies: PropTypes.func,
};

export default FilterBySpecies;
