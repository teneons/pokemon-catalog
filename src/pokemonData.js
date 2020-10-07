
const pokemonData = () => {

  let pokiData = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(d=>d.json)

  return pokiData.abilities;
}

export default pokemonData;