import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar si la música está sonando
  const [captureSound] = useState(new Audio("/pokemon-mp3.mp3")); // Inicializamos el audio
  const toggleMusic = () => {
    if (isPlaying) {
      captureSound.pause(); // Pausamos el sonido si ya está sonando
      captureSound.currentTime = 0; // Reiniciamos el tiempo para empezar desde el principio
    } else {
      captureSound.play(); // Reproducimos el sonido si no está sonando
    }
    setIsPlaying(!isPlaying); // Cambiamos el estado de isPlaying
  };
  return (
    <nav className="bg-orange-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="/pokemon-png.webp"
          alt="Logo"
          className="h-14 max-w-full object-contain"
        />
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/nosotros" className="text-white hover:underline">
              Nosotros
            </Link>
          </li>
          <li>
          <button
              onClick={toggleMusic} // Cambiamos la función aquí
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-orange-500 hover:bg-orange-400 transition duration-300"
              aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
            >
              {isPlaying ? (
                <span className="material-icons">pause</span> // Icono de pausa
              ) : (
                <span className="material-icons">play_arrow</span> // Icono de play
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
