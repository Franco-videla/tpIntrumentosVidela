import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import DondeEstamos from './components/DondeEstamos/DondeEstamos';
import Instrumento from './components/Instrumento/instrumento';
import Detalle from "./components/Detalle/Detalle";
import Editar from "./components/Editar/Editar";
import AñadirInstrumento from "./components/AñadirInstrumento/AñadirInstrumento";
import Home from "./components/Home/Home";
import { useState } from "react";
import Carrito from "./components/Carrito/Carrito";
import './App.css';

function App() {
  const [carrito, setCarrito] = useState([]);

  return (
    <Router>
      <div className="app-container">
        <div className="nav-container">
          <Nav />
        </div>
        <div className="content-container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/DondeEstamos' element={<DondeEstamos />} />
            <Route path="/Instrumentos" element={<Instrumento carrito={carrito} setCarrito={setCarrito} />} />
            <Route path='/Detalle/:id' element={<Detalle />} /> 
            <Route path='/Editar/:id' element={<Editar />} />    
            <Route path='/Añadir' element={<AñadirInstrumento />} />    
          </Routes>
        </div>
        <Carrito carrito={carrito} />
      </div>
    </Router>
  );
}

export default App;
