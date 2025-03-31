import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navegacion from './components/Navegacion';
import Header from './components/Header';
import Footer from './components/Footer';
import Presentacion from './components/Presentacion';
import Galeria from './components/Galeria';
/*
import Videos from './components/Videos';
import Registro from './components/Registro';
import Login from './components/Login';
import Contacto from './components/Contacto';
*/

function App() {
  return (
    <>
      <Header />
      <Navegacion />
      <Routes>
        <Route path='/presentacion' element={<Presentacion />} />
        <Route path='/galeria' element={<Galeria />} />
        {/*
        <Route path='/videos' element={<Videos />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contacto' element={<Contacto />} />
        */}
      </Routes>
      <Footer />
    </>
  );
}

export default App
