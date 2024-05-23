import PropTypes from "prop-types";
function CharacterDetail({charDetail}) {
    //TODO: cambiar el estilo en estas tarjetas
  return (
    <article className="articledetail">
     
        <h3>{charDetail.name}</h3>
        <img
          className="articledetail--img"
          src={charDetail.img}
          alt={charDetail.name}
        />
        <p>Especie: {charDetail.species}</p>
        <p>Planeta de origen: {charDetail.planet === "unknown" ? "Dato desconocido" : charDetail.planet}</p>
        <p>Número de episodios en que aparece: {charDetail.episodes}</p>
        <p>Estatus vital: {charDetail.status}</p>

  
    </article>
  )
}

CharacterDetail.propTypes = {
    charDetail: PropTypes.object
}

export default CharacterDetail