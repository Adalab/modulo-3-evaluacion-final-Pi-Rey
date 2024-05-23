import PropTypes from "prop-types";

function FilterByName({setInputName}) {

  return (
    <form action="">
        <label htmlFor="nameSearch">Introduce el nombre de un personaje:</label>
        <input type="text" name="nameSearch" id="nameSearch" placeholder="Morty Smith" onChange={((ev)=> setInputName(ev.target.value))} />
    </form>
  )
}

FilterByName.propTypes = {
    setInputName: PropTypes.func
}

export default FilterByName