import { createContext, useState, useEffect } from "react";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const listPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        console.log(data);
        // Aquí usamos Promise.all para esperar a que todas las promesas se resuelvan
        const res = await Promise.all(
          data.results.map(async (pokemon) => {
            const dataDetail = await fetch(pokemon.url);
            const pokemonData = await dataDetail.json();
            //console.log("pokemonData",pokemonData);
            return {
              id: pokemonData.id,
              name: pokemonData.name,
              image: pokemonData.sprites.other.dream_world.front_default,
              height: pokemonData.height,
              weight: pokemonData.weight,
            };
          })
        );

        // Luego actualizamos el estado con los datos de los pokemons
        setPokemons(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Después de cargar, desactivamos el estado de carga
      }
    };

    listPokemon(); // Llamamos a la función async dentro del useEffect
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemons, loading }}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
