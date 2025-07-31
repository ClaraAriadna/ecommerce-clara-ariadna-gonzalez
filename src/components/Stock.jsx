import React, {useState, useEffect} from 'react';
import Navegacion from './Navegacion';
import Footer from './Footer';
import stockData from '../assets/json/api/stock.json';
import '../css/estilos.css';
import '../css/stock.css';

const Stock = () => {
    // Consumo de API y apertura de páginas de productos
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        try {
            const obtenerProductos = async () => {
                setProductos(stockData);
            }
            obtenerProductos();
        } catch (error) {
            alert("Error al obtener productos:", error.message);
        }
    }, []);

    return (
        <>
          <div>
            <Navegacion />
            <table>
                <caption>Productos en stock</caption>
                <thead>
                    <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody id="stock-content">
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>
                                <img src={`/media/img/${producto.imagen}`} alt={producto.descripcion} width={200} height="auto"/>
                            </td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer />
          </div>
        </>
    )
}

export default Stock;
