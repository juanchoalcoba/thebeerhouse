import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookingsPage from './pages/BookingsPage';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: true,
    });
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  
    // Forzar el manejo de las teclas del teclado para el scroll
    const handleKeydown = (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        lenis.scrollTo(window.scrollY + (event.key === 'ArrowDown' ? 100 : -100), { duration: 1 });
        event.preventDefault();
      }
    };
  
    // Escuchar eventos de teclado
    window.addEventListener('keydown', handleKeydown);
  
    // Limpieza de los eventos cuando el componente se desmonta
    return () => {
      lenis.destroy();
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservas" element={<BookingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
