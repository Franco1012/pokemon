import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>© 2024 Mi Página de Pokémon</p>
        <div>
          {/* Enlace a la página de Inicio */}
          <Link to="/" className="text-blue-400 hover:text-blue-600 mx-2">
            Inicio
          </Link>
          {/* Enlace a la página de Nosotros */}
          <Link
            to="/nosotros"
            className="text-blue-400 hover:text-blue-600 mx-2"
          >
            Nosotros
          </Link>
        </div>
      </div>
    </div>
  );
}
