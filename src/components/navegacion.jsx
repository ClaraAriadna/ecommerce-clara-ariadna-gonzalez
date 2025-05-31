import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function Navegacion() {
    return (
    <>
      <div>
        <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/presentacion">Presentación</Link></li>
            <li><Link to="/galeria">Galería de trabajos</Link></li>
            <li><Link to="/videos">Videos</Link></li>
            <li><a href="#footer">Pie de página</a></li>
        </ul>
        </nav>
      </div>
    </>
    )
}

export default Navegacion;