import React from "react";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../PokemonContext"; // Asegúrate de importar tu contexto
import { motion } from "framer-motion";

const PokemonDetail = () => {
  
  const [captured, setCaptured] = useState(false);
  const { id } = useParams();
  const { pokemons } = useContext(PokemonContext);

  // Buscar el Pokémon que coincide con el ID
  const pokemon = pokemons.find((pokemon) => pokemon.id === parseInt(id));

  const handleCapture = () => {
    setCaptured(true); // Cambiamos el estado a capturado
  };

  if (!pokemon) {
    return <div>Pokémon no encontrado</div>;
  }

  return (
    <div className="p-5">
      <motion.div
        className={`border border-gray-300 rounded-lg p-6 bg-white shadow-lg flex flex-col items-center`}
        initial={{ opacity: 1, scale: 1 }}
        animate={
          captured
            ? { scale: 0.7, backgroundColor: "#FF0000", rotate: 360 } // Efecto cuando el Pokémon es capturado
            : { scale: 1, backgroundColor: "#FFFFFF" }
        }
        transition={{ duration: 0.5 }} // Duración de la animación
      >
        <motion.img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-48 h-48 object-cover mb-4"
          animate={
            captured ? { scale: 0.5, opacity: 0.5 } : { scale: 1, opacity: 1 }
          } // Animación de la imagen al capturarlo
        />
        <h2 className="text-2xl font-bold">{pokemon.name}</h2>
        <p className="text-lg mt-2">Altura: {pokemon.height} m</p>
        <p className="text-lg mt-2">Peso: {pokemon.weight} kg</p>

        {/* Botón de captura */}
        <motion.button
          onClick={handleCapture}
          disabled={captured}
          className={`px-4 py-2 text-white font-bold rounded-lg transition-transform duration-300 
            ${
              captured
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700"
            }
          `}
          whileHover={!captured && { scale: 1.1 }} // Animación al pasar el mouse si no está capturado
        >
          {captured ? "Capturado" : "Capturar"}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PokemonDetail;
