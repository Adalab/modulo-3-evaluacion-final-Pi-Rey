import PropTypes from "prop-types";
function CharacterDetail({charDetail}) {
  return (
    <div>{charDetail.name}</div>
  )
}

CharacterDetail.propTypes = {
    charDetail: PropTypes.object
}

export default CharacterDetail