import PropTypes from "prop-types";

function FilterBySpecies( { inputSpecies,
    setInputSpecies}) {
  return (
    <form action="" onSubmit={((ev)=>ev.preventDefault())}>
        <select name="speciesInput" id="speciesInput" onChange={((ev)=>setInputSpecies(ev.target.value))} value={inputSpecies}>
            <option value="">Muestra todos</option>
            <option value="Humano">Humano</option>
            <option value="Alienígena">Alienígena</option>
        </select>
    </form>
  )
}

FilterBySpecies.propTypes = {
    inputSpecies: PropTypes.string,
    setInputSpecies: PropTypes.func
}

export default FilterBySpecies