import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navegacion from './Navegacion';
import Footer from './Footer';
import '../css/estilos.css';
import '../css/stock.css';

const Stock = () => {
    // Consumo de API y apertura de páginas de productos
    const [productos, setProductos] = useState([]);
    useEffect(() => {
    const obtenerProductos = async () => {
        try {
            const response = await fetch("/json/api/stock.json");
            if (!response.ok) {
                    throw new Error(`La conexión falló: ${response.status}`);
            }
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            alert("Error al obtener productos:", error.message);
        }
    };
    obtenerProductos();
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
                                <Link to={`/${producto.id}`}><img src={`/media/img/${producto.imagen}`} alt={producto.descripcion}/></Link>
                            </td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.precio}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3"><span className="small">(clic en la imagen para ver más detalles)</span></td>
                    </tr>
                </tfoot>
            </table>
            <Footer />
          </div>
        </>
    )
}

export default Stock;
