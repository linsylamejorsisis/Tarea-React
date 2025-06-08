import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokeListaWuju from './PokeListaWuju';
import PokeDetalles from './PokeDetalles';
import './App.css'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokeListaWuju />} />
        <Route path="/pokemon/:id" element={<PokeDetalles />} />
      </Routes>
    </Router>
  );
}

export default App;
