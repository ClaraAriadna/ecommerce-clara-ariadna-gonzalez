import React, { Component } from 'react'
import Imagen from './Imagen'
import Navegacion from './Navegacion'
import Footer from './Footer'
import '../css/index.css'

export default class Presentacion extends Component {
  render() {
    return (
    <>
      <div className="index">
      <h1>Claudia Vitraux</h1>
      <Navegacion />
      <main>
        <section>
            <Imagen />
        </section>
      </main>
      <Footer />
      </div>
    </>
    )
  }
}
