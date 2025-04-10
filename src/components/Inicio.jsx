import React, { Component } from 'react';
import Navegacion from './Navegacion';
import '../css/index.css';

export default class Inicio extends Component {
  render() {
    return (
    <>
      <div className="index">
        <header>
         <h1>Claudia Vitraux</h1>
         <p>Objetos en vitraux Tiffany y mosaico</p>
         <p>Se realizan trabajos a pedido. <a href="stock.html">Stock disponible</a></p>
        </header>
        <Navegacion />
      </div>
    </>
    )
  }
}

