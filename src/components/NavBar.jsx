import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar si la música está sonando
  const [captureSound] = useState(new Audio("/pokemon-mp3.mp3")); // Inicializamos el audio
  
  const toggleMusic = () => {
    if (isPlaying) {
      captureSound.pause();
      captureSound.currentTime = 0;
    } else {
      captureSound.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 p-4 h-auto border-b border-gray-300">
      <div className="flex flex-col md:flex-row h-full md:h-96">
        {/* Contenedor de texto */}
        <div className="flex flex-col flex-1 justify-center items-center h-full gap-4 p-4">
          <h1 className="text-white text-3xl md:text-6xl font-medium text-center md:text-left max-w-lg">
            Bienvenidos al Mundo de los Pokemón
          </h1>
          <p className="text-white text-center md:text-left max-w-lg">
            ¡Sumérgete en la emocionante aventura Pokémon! Explora una galería
            de imágenes, disfruta de la música oficial y conoce a los
            entrenadores más destacados.
          </p>
          <div className="flex justify-center md:justify-start items-center w-full max-w-lg">
            <button
              onClick={toggleMusic}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-500 hover:bg-orange-400 transition duration-300"
              aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
            >
              {isPlaying ? (
                <span className="material-icons">pause</span>
              ) : (
                <span className="material-icons">play_arrow</span>
              )}
            </button>
          </div>
        </div>

        {/* Contenedor de imagen */}
        <div className="flex flex-1 justify-center items-center h-full p-4">
          <img
            className="w-3/4 md:w-auto md:h-full object-contain rounded"
            src="https://i.blogs.es/82d7ef/pokemon/1366_2000.jpeg"
            alt="pokemon"
          />
        </div>
      </div>
    </nav>
  );
};
