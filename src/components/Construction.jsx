// components/UnderConstruction.jsx

import React from "react";

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
        🚧 Página en Construcción 🚧
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 mb-8">
        Estamos trabajando para traerte algo increíble. ¡Vuelve pronto!
      </p>
      <div className="animate-bounce">
        <svg
          className="w-16 h-16 text-yellow-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
          />
        </svg>
      </div>
    </div>
  );
};

export default UnderConstruction;
