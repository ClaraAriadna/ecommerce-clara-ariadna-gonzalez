import React, { Component } from 'react';
import imagenes from '../json/api/galeria.json'
import '../css/galeria.css';
import '../css/estilos.css';
import Navegacion from './Navegacion';

export default class Galeria extends Component {
  render() {
    const vitraux = imagenes.filter((img) => img.galeria === "vitraux");
    const mosaico = imagenes.filter((img) => img.galeria === "mosaico");
    return (
      <div>
        <h1>Claudia Vitraux</h1>
        <Navegacion />
        <main>
        <h1>Galería</h1>
        <p>Productos en stock se muestran marcados en verde</p>
        <section>
           <h2>Vitraux</h2>
           <p>(click en cada foto para agrandar)</p>
           <div className="vitraux">
           {vitraux.map(function(img) { return (
              <div key={img.id} className={`item ${img.enstock ? "en-stock" : ""}`}>
                <a href={img.src}><img src={img.src} alt={img.alt} /></a>
              </div>
            )})}
           </div>
            </section>
            <section>
           <h2>Mosaico</h2>
           <div className="mosaico">
           {mosaico.map(function(img) { return (
              <div key={img.id} className={`item ${img.enstock ? "en-stock" : ""}`}>
                <a href={img.src}><img src={img.src} alt={img.alt} /></a>
              </div>
            )})}
           </div>
         </section>
         </main>
      </div>
    );
  }
}
