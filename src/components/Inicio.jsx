import React from 'react';
import { Link } from 'react-router-dom';
import Navegacion from './Navegacion';
import Footer from './Footer';
import '../css/index.css';

const Inicio = () => {
    return (
    <>
      <div>
        <header>
         <h1>Claudia Vitraux</h1>
         <p>Objetos en vitraux Tiffany y mosaico</p>
         <p>Se realizan trabajos a pedido. <Link to="/stock">Stock disponible</Link></p>
        </header>
        <Navegacion />
        <Footer />
      </div>
    </>
  )
}

export default Inicio;
