import React from "react";
import { Titulo } from "./Titulo";


export const Nosotros = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 m-5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          Nosotros
        </h1>

        {/* Descripción */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          voluptatibus laboriosam fuga quia minima? Praesentium sed molestias odit
          minima, ullam velit iure eveniet dolor optio illo, nihil ipsa labore
          repudiandae.
        </p>

        {/* Sección con información adicional */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            ¿Quiénes somos?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Somos un equipo dedicado a ofrecer una experiencia única a nuestros usuarios, brindando la mejor información y
            funcionalidades relacionadas con Pokémon. Nuestro objetivo es crear un espacio donde los amantes de Pokémon puedan
            encontrar todo lo que necesitan en un solo lugar.
          </p>
        </div>
      </div>
    </section>
  );
};

