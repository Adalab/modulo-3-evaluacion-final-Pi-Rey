import FilterByName from "./FilterByName"
import PropTypes from "prop-types";

function Filter({setInputName}) {
  return (
    <fieldset>
        <FilterByName setInputName={setInputName}/>
    </fieldset>
  )
}

Filter.propTypes = {
    setInputName: PropTypes.func
}

export default Filter
