import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Presentacion from './components/Presentacion';
import Galeria from './components/Galeria';
import Videos from './components/Videos';
import Stock from './components/Stock';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/presentacion' element={<Presentacion />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/stock' element={<Stock />} />
      </Routes>
    </>
  );
}

export default App

