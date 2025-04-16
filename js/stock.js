// Consumo de API y apertura de páginas de productos
let stockHTML = '';
let ventanas = [];

function ventanaEmergente(URL) {
    window.open(URL, "_blank", "popup");
}

function clic(destino) {
    document.getElementById(destino).addEventListener("click", () => ventanaEmergente("stock/"+destino+".html"));
}

async function obtenerProductos() {
    try {
        const response = await fetch("../src/json/api/stock.json");
        if (!response.ok) {
                throw new Error(`La conexión falló: ${response.status}`);
        }
        const stock = await response.json();
        for (let i = 0; i < stock.length; i++) {
            stockHTML += `
            <tr>
                <td><a id="${stock[i].id}" href="#"><img src="media/img/${stock[i].imagen}" alt="${stock[i].descripción}" class="stock-img" /></a>
                <td>${stock[i].descripción}</td>
                <td>${stock[i].precio}</td>
            </tr>
            `
            ventanas.push(stock[i].id);
        }
        document.getElementById("stock-content").innerHTML = stockHTML;
        for (let j of ventanas) {
            clic(j);
        }
    } catch (error) {
        alert("Error al obtener productos:", error);
    }
}

obtenerProductos();


