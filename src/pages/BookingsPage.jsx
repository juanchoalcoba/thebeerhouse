
const BookingsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-100 to-orange-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        <h2 className="text-4xl font-extrabold text-amber-800 text-center mb-6">Reserva tu mesa 🍕🍺</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-amber-900 mb-1">Nombre completo</label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-4 py-2 text-black rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-amber-900 mb-1">Telefono</label>
            <input
              type="number"
              placeholder="099123123"
              className="w-full px-4 py-2 rounded-xl border text-black border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-amber-900 mb-1">Cantidad de personas</label>
            <input
              type="number"
              min="1"
              max="20"
              placeholder="Ej: 4"
              className="w-full px-4 py-2 rounded-xl border text-black border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-medium text-amber-900 mb-1">Fecha</label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-xl border text-black border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-amber-900 mb-1">Hora</label>
              <input
                type="time"
                className="w-full px-4 py-2 rounded-xl border text-black border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          

          <div className="text-center">
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-3 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              Reservar ahora
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingsPage;
