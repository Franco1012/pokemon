import { useContext } from "react";
import { PokemonContext } from "../PokemonContext";
import { Link } from "react-router-dom";
const PokemonHome = () => {
  const { pokemons, loading } = useContext(PokemonContext);

  if (loading) {
    return <div>Loading...</div>; // Mensaje de carga
  }

  return (
    <div className="container mx-auto w-[80%]">
      <h2 class="text-white text-3xl md:text-4xl font-semibold text-center my-6">
        Pokemons
      </h2>
      <div className="h-full p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg flex flex-col items-center"
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-24 h-24 object-cover mb-3"
              />
              <h2 className="text-lg font-bold text-center">
                <Link to={`/pokemon/${pokemon.id}`}>
                  {" "}
                  {/* Enlace a la página de detalles */}
                  <span>{pokemon.name}</span>
                </Link>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PokemonHome;
