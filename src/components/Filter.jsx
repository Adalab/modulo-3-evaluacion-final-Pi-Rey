import FilterByName from "./FilterByName"
import PropTypes from "prop-types";

function Filter({setInputName, inputName,reset}) {
  return (
    <fieldset className="fieldset" >
        <FilterByName setInputName={setInputName} inputName={inputName}/>
        <button className="fieldset--btn" onClick={reset}>Reset</button>
    </fieldset>
  )
}

Filter.propTypes = {
    setInputName: PropTypes.func,
    inputName: PropTypes.string,
    reset: PropTypes.func,
}

export default Filter
