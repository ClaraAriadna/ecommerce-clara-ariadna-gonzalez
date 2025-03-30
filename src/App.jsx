import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navegacion from './components/Navegacion';
import Header from './components/Header';
import Footer from './components/Footer';
import Presentacion from './components/Presentacion';

function App() {
  return (
    <>
      <Header />
      <Navegacion />
      <Routes>
        <Route path='/presentacion' element={<Presentacion />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
