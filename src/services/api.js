const getDataFromApi = () => {
  const status = (charSta) => {
    if (charSta === "Alive") {
      return "Vivo";
    } else if (charSta === "unknown") {
      return "Dato desconocido";
    } else if (charSta === "Dead") {
      return "Muerto";
    }
  };
  return fetch("https://rickandmortyapi.com/api/character")
    .then((respose) => respose.json())
    .then((data) => {
      const newArray = data.results.map((character) => {
        //estamos haciendo map para ir por cada item y coger lo que nos interesa, que es lo que nos devolverá, que es lo que pone en las líneas siguientes
        return {
          name: character.name,
          img: character.image,
          species: character.species === "Alien" ? "Alienígena" : "Humano",
          planet: character.origin.name,
          episodes: character.episode.length,
          status: status(character.status),
          id: character.id,
        };
      });
      const sortedNewArray = newArray.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return sortedNewArray;
    });
};

export default getDataFromApi;
