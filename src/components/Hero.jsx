import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="inicio" className="relative w-full flex fex-col h-screen justify-center  md:mt-0 items-center">
      {/* Fondo de pantalla */}
      <div className="absolute inset-0 bg-[url('/thebeerhouse.jpg')] bg-cover bg-center bg-no-repeat z-0"></div>

      {/* Contenido encima del fondo */}
      <div className="relative z-10  flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          {/* Texto abajo en mobile */}
          <div className="text-center font-light flex flex-col backdrop-blur-sm rounded-4xl px-12 py-4">
            <h1 className="text-[100px] md:text-[160px] text-blue-50 drop-shadow-[5px_8px_6px_rgba(0,0,0,0.8)] font-extrabold">
              T.B.H
            </h1>
            <p className="text-3xl md:text-4xl text-blue-50 font-bold drop-shadow-[4px_4px_6px_rgba(0,0,0,0.8)]">THE BEER HOUSE</p>
          </div>
        </div>

        <div className="flex w-full mt-8 md:mt-12 justify-center items-center">
          <Link to="/reservas" className="bg-yellow-300 font-bold text-black border border-white hover:bg-yellow-400 text-md px-8 py-2 rounded-3xl shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
            RESERVAR
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
