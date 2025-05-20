import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Seguridad from './components/Security';
import Cuenta from './components/Cuenta';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/seguridad" element={<Seguridad />} />
        <Route path="/cuenta" element={<Cuenta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;