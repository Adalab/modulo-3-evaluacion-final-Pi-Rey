const getDataFromApi = () => {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((respose) => respose.json())
      .then((data) => {
        const newArray = data.results.map((character) => {
          //estamos haciendo map para ir por cada item y coger lo que nos interesa, que es lo que nos devolverá, que es lo que pone en las líneas siguientes
          return {
            name: character.name,
            img: character.image,
            species: character.species,
            planet: character.origin.name,
            episodes: character.episode.length,
            status: character.status,
            id: character.id
          };
        });
        return newArray;
      });
  };
  
  export default getDataFromApi;
  