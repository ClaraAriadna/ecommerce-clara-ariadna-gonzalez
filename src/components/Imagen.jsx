import React from 'react';
import { useState, useEffect } from 'react';
import Fanal from '/media/img/fanal.jpg'
import Piramide from '/media/img/piramide.jpeg';
import Terrario from '/media/img/terrario.jpg';
import Velador from '/media/img/velador.jpg';
import '../css/img.css';

const Imagen = () => {
  let imagenes = new Array(Fanal, Piramide, Terrario, Velador);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  // Cambiamos la imagen
  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
        setShow(true);
      }, 1000);
    }, 3000);
    return () =>
      clearInterval(interval);
  }, []);
  return (
    <img src={imagenes[index]} alt='Esta imagen no puede visualizarse en el navegador' className={`presentacion ${show ? "show": "hidden"}`} />
  )
}

export default Imagen;



