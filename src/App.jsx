import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookingsPage from './pages/BookingsPage';

function App() {






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
