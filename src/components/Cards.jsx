// CraftCards.jsx
import { useRef } from "react";

const cards = [
  {
    title: "Golden Ale",
    text: "Una cerveza dorada suave y refrescante con notas de cítricos y miel.",
    btn: "Pedir ahora",
  },
  {
    title: "Pizza BBQ Ahumada",
    text: "Carnes ahumadas, cebolla caramelizada y nuestra salsa BBQ casera.",
    btn: "Probar porción",
  },
  {
    title: "Lager Ámbar",
    text: "Sabor a malta intenso equilibrado con un final crujiente de lúpulo.",
    btn: "Degustar",
  },
  {
    title: "Pizza Margarita",
    text: "Tomate, mozzarella, albahaca y un toque de aceite de oliva con ajo.",
    btn: "Pedir una",
  },
];

export default function CraftCards() {
  const cardsRef = useRef([]);

  return (
    <section className="min-h-screen  text-white py-16 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4 text-yellow-300">
        Nuestros Especiales
      </h2>
      <p className="text-lg text-center max-w-2xl mb-12 text-gray-300">
        Explora nuestra selección más fina de cervezas artesanales y pizzas
        hechas a mano, preparadas con amor y pasión.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/30 border border-yellow-900 transition-transform hover:-translate-y-2 duration-300"
          >
            <h3 className="text-xl font-bold mb-2 text-yellow-300">
              {card.title}
            </h3>
            <p className="text-sm text-gray-300 mb-4">{card.text}</p>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded-full transition duration-300">
              {card.btn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
