// import { useParams } from "react-router-dom"
// import PropTypes from "prop-types";

// function CharacterDetail({getInfo}) {
//     const { characterId } = useParams();
//     console.log(characterId);

//     const detail = getInfo(characterId);

//   return (
//     <div>{detail.name}</div>
//   )
// }

// CharacterDetail.propTypes = {
//     getInfo: PropTypes.func
// }
// export default CharacterDetail

import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterDetail({ getInfo }) {
  const { characterId } = useParams();
  const detail = getInfo(characterId);

  if (!detail) {
    return <div>Character not found</div>;
  }

  return (
    <div>{detail.name}</div>
  );
}

CharacterDetail.propTypes = {
  getInfo: PropTypes.func
};

export default CharacterDetail;
