import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Presentacion from './Presentacion'

function Navegacion() {
    return (
    <>
      <div>
        <nav>
        <ul>
            <li><a href="#header">Inicio</a></li>
            <li><Link to="/presentacion">Presentación</Link></li>
            <li><a href="galeria.html">Galería de trabajos</a></li>
            <li><a href="videos.html">Videos</a></li>
            <li><a href="https://www.facebook.com/claudiavitraux">Facebook</a></li>
            <li><a href="https://ar.pinterest.com/claudiavitraux">Pinterest</a></li>
            <li><a href="registro.html">Registrarse</a></li>
            <li><a href="login.html">Iniciar sesión</a></li>
            <li><a href="contacto.html">Contacto</a></li>
            <li><a href="#footer">Pie de página</a></li>
        </ul>
        </nav>
        <hr />
      </div>
    </>
    )
}

export default Navegacion;
