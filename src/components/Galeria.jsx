import React, { Component } from 'react';
import Colganteflores from '../../media/img/colgante flores.jpg';
import Colgantepajaritos from '../../media/img/colgante pajaritos.jpg';
import Fanal from '../../media/img/fanal.jpg';
import Flores from '../../media/img/flores.jpg';
import Pajaritos from '../../media/img/pajaritos.jpg';
import Servilletero from '../../media/img/servilletero.jpg';
import Terrario from '../../media/img/terrario.jpg';
import Velador from '../../media/img/velador.jpg';
import Arbolitoazul from '../../media/img/arbolito azul.jfif';
import Cajitas from '../../media/img/cajitas.jfif';
import Colgantemariposa from '../../media/img/colgante mariposa.jfif';
import Colgantesvarios from '../../media/img/colgantes varios.jfif';
import Fanales from '../../media/img/fanales.jfif';
import Lamparaflores from '../../media/img/lampara flores.jfif';
import Lechuza from '../../media/img/lechuza.jfif';
import Mariposas from '../../media/img/mariposas.jfif';
import Mascajitas from '../../media/img/mas cajitas.jfif';
import Ornamentosnavidad from '../../media/img/ornamentos navidad.jfif';
import Tutorflores from '../../media/img/tutor flores.jfif';
import Lamparanaranja from '../../media/img/lampara naranja.jfif';
import Lamparaazul from '../../media/img/lampara azul.jfif';
import Colgantecorazon from '../../media/img/colgante corazon.jpeg';
import Colgantegato from '../../media/img/colgante gato.jpeg';
import Piramide from '../../media/img/piramide.jpeg';
import '../../css/galeria.css';


export default class Galeria extends Component {
  render() {
    return (
      <div>
        <main>
        <h1>Galería</h1>
        <p>Productos en stock se muestran marcados en verde</p>
        <section>
           <h2>Vitraux</h2>
           <p>(click en cada foto para agrandar)</p>
           <table>
            <tbody>
                 <tr>
                     <td><a href="media/img/colgante flores.jpg"><img src={Colganteflores} alt="colgante de flores" className="alta"/></a></td>
                     <td><a href="media/img/colgante pajaritos.jpg"><img src={Colgantepajaritos} alt="colgante de pajaritos" className="alta"/></a></td>
                     <td><a href="media/img/fanal.jpg"><img src={Fanal} alt="fanal" className="alta"/></a></td>
                 </tr>
                 <tr>
                     <td><a href="media/img/flores.jpg"><img src={Flores} alt="flores" className="cuadrada"/></a></td>
                     <td><a href="media/img/pajaritos.jpg"><img src={Pajaritos} alt="pajaritos" className="ancha"/></a></td>
                     <td><a href="media/img/servilletero.jpg"><img src={Servilletero} alt="servilletero" className="cuadrada"/></a></td>
                 </tr>
                 <tr>
                     <td><a href="media/img/terrario.jpg"><img src={Terrario} alt="terrario" className="ancha"/></a></td>
                     <td><a href="media/img/velador.jpg"><img src={Velador} alt="velador" className="cuadrada"/></a></td>
                     <td><a href="media/img/arbolito azul.jfif"><img src={Arbolitoazul} alt="arbolito azul" className="especial-a"/></a></td>
                 </tr>
                 <tr>
                     <td><a href="media/img/cajitas.jfif"><img src={Cajitas} alt="cajitas" className="cuadrada"/></a></td>
                     <td><div className="en-stock"><a href="media/img/colgante mariposa.jfif"><img src={Colgantemariposa} alt="colgante de mariposa" className="alta"/></a></div></td>
                     <td><a href="media/img/colgantes varios.jfif"><img src={Colgantesvarios} alt="colgantes varios" className="cuadrada"/></a></td>
                 </tr>
                 <tr>
                     <td><div className="en-stock"><a href="media/img/fanales.jfif"><img src={Fanales} alt="fanales" className="especial-b"/></a></div></td>
                     <td><a href="media/img/lampara flores.jfif"><img src={Lamparaflores} alt="lampara flores" className="ancha"/></a></td>
                     <td><div className="en-stock"><a href="media/img/lechuza.jfif"><img src={Lechuza} alt="lechuza" className="alta"/></a></div></td>
                 </tr>
                 <tr>
                     <td><a href="media/img/mariposas.jfif"><img src={Mariposas} alt="mariposas" className="cuadrada"/></a></td>
                     <td><a href="media/img/mas cajitas.jfif"><img src={Mascajitas} alt="cajitas" className="especial-b"/></a></td>
                     <td><a href="media/img/ornamentos navidad.jfif"><img src={Ornamentosnavidad} alt="ornamentos navidad" className="cuadrada"/></a></td>
                 </tr>
                 <tr>
                     <td><a href="media/img/tutor flores.jfif"><img src={Tutorflores} alt="tutor flores" className="especial-a"/></a></td>
                     <td><a href="media/img/lampara naranja.jfif"><img src={Lamparanaranja} alt="lampara naranja" className="alta"/></a></td>
                     <td><a href="media/img/lampara azul.jfif"><img src={Lamparaazul} alt="lampara azul" className="alta"/></a></td>
                 </tr>
                 <tr>
                    <td><div className="en-stock"><a href="media/img/colgante corazon.jpeg"><img src={Colgantecorazon} alt="colgante de corazón" className="alta"/></a></div></td>
                    <td><div className="en-stock"><a href="media/img/colgante gato.jpeg"><img src={Colgantegato} alt="colgante de gato" className="alta" /></a></div></td>
                    <td><div className="en-stock"><a href="media/img/piramide.jpeg"><img src={Piramide} alt="pirámide" className="alta"/></a></div></td>
                 </tr>
              </tbody>
           </table>
     </section>
     <section>
           <h2>Mosaico</h2>
           <table>
            <tbody>
                 <tr>
                    <td><a href="media/img/mosaico 1.jfif"><img src="media/img/mosaico 1.jfif" alt="mosaico" width="200" height="160"/></a></td>
                    <td><a href="media/img/mosaico 2.jfif"><img src="media/img/mosaico 2.jfif" alt="mosaico" width="200" height="160"/></a></td>
                    <td><a href="media/img/mosaico 3.jfif"><img src="media/img/mosaico 3.jfif" alt="mosaico" width="200" height="180"/></a></td>
                 </tr>
                 <tr>
                    <td><a href="media/img/mosaico 4.jfif"><img src="media/img/mosaico 4.jfif" alt="mosaico" width="170" height="200"/></a></td>
                    <td><a href="media/img/mosaico 5.jfif"><img src="media/img/mosaico 5.jfif" alt="mosaico" width="150" height="200"/></a></td>
                    <td><a href="media/img/mosaico 6.jfif"><img src="media/img/mosaico 6.jfif" alt="mosaico" width="200" height="200"/></a></td>
                 </tr>
                 <tr>
                    <td><a href="media/img/mosaico 7.jfif"><img src="media/img/mosaico 7.jfif" alt="mosaico" width="200" height="150"/></a></td>
                    <td><a href="media/img/mosaico 8.jfif"><img src="media/img/mosaico 8.jfif" alt="mosaico" width="200" height="100"/></a></td>
                    <td><a href="media/img/mosaico 9.jfif"><img src="media/img/mosaico 9.jfif" alt="mosaico" width="200" height="200"/></a></td>
                 </tr>
                 <tr>
                    <td><a href="media/img/mosaico 10.jfif"><img src="media/img/mosaico 10.jfif" alt="mosaico" width="200" height="100"/></a></td>
                    <td><a href="media/img/mosaico 11.jfif"><img src="media/img/mosaico 11.jfif" alt="mosaico" width="200" height="180"/></a></td>
                    <td><a href="media/img/mosaico 12.jfif"><img src="media/img/mosaico 12.jfif" alt="mosaico" width="200" height="160"/></a></td>
                 </tr>
                 <tr>
                    <td><a href="media/img/mosaico 13.jfif"><img src="media/img/mosaico 13.jfif" alt="mosaico" width="200" height="100"/></a></td>
                    <td><a href="media/img/mosaico 14.jfif"><img src="media/img/mosaico 14.jfif" alt="mosaico" width="200" height="200"/></a></td>
                    <td><a href="media/img/mosaico 15.jfif"><img src="media/img/mosaico 15.jfif" alt="mosaico" width="160" height="200"/></a></td>
                 </tr>
              </tbody>
           </table>
        </section>
        </main>
      </div>
    );
  }
}
