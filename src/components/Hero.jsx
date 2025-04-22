import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      id="inicio"
      className="relative font-roboto w-full flex flex-col h-screen justify-center items-center bg-black"
    >
      {/* Fondo de pantalla */}
      <div className="absolute inset-0 bg-[url('/thebeerhouse.jpg')] opacity-60 bg-cover bg-center bg-no-repeat z-0"></div>

      {/* Contenido encima del fondo */}
      <div className="relative z-10 flex flex-col justify-center items-center h-screen px-4 text-center">
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="font-light flex flex-col backdrop-blur-xs rounded-4xl px-6 py-4">
            <h1 className="text-[80px] md:text-[160px] font-extrabold text-[#F9D976] drop-shadow-[5px_8px_6px_rgba(99,47,0,0.8)]">
              T.B.H
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-[#DFAF2B] drop-shadow-[4px_6px_5px_rgba(99,47,0,0.9)]">
              THE BEER HOUSE
            </p>
            <span className="text-lg md:text-xl mt-2 text-[#FFD580] font-medium drop-shadow-[2px_3px_4px_rgba(99,47,0,0.7)] w-96 italic tracking-wide">
              Donde la buena cerveza y los buenos momentos se encuentran
            </span>
          </div>
        </div>

        {/* Botón de reservar */}
        <div className="flex w-full mt-8 md:mt-12 justify-center items-center">
          <Link
            to="/reservas"
            className="bg-yellow-300 font-bold text-black border border-yellow-700 font-sans  hover:bg-yellow-400 text-md px-8 py-2 rounded-3xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
          >
            RESERVAR
          </Link>
        </div>

        {/* Íconos sociales */}
        <div className="flex gap-6 mt-6 text-[#FFD580] text-2xl">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-transform hover:-translate-y-1 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-transform hover:-translate-y-1 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform hover:-translate-y-1 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
