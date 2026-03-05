let total = 0;

function agregarNombre() {
    const nombre = document.getElementById("name").value;

    if (nombre.trim() === "") {
        alert("Ingrese el nombre del cliente");
        return;
    }

    document.getElementById("clienteMostrado").textContent = "Cliente: " + nombre;
    document.getElementById("clienteMostradoCopia").textContent = "Cliente: " + nombre;

    document.getElementById("name").value = "";
}

function agregarProducto() {
    const producto = document.getElementById("producto").value;
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const precio = parseFloat(document.getElementById("precio").value);

    if (!producto || cantidad <= 0 || precio < 0) {
        alert("Complete correctamente los campos");
        return;
    }

    const subtotal = cantidad * precio;
    total += subtotal;

    // BOLETA PRINCIPAL
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${producto}</td>
        <td>${cantidad}</td>
        <td>$${precio.toFixed(2)}</td>
        <td>$${subtotal.toFixed(2)}</td>
        <td class="no-print">
            <button onclick="eliminarProducto(this, ${subtotal})">X</button>
        </td>
    `;
    document.getElementById("tablaProductos").appendChild(fila);

    // COPIA
    const filaCopia = document.createElement("tr");
    filaCopia.innerHTML = `
        <td>${producto}</td>
        <td>${cantidad}</td>
        <td>$${precio.toFixed(2)}</td>
        <td>$${subtotal.toFixed(2)}</td>
    `;
    document.getElementById("tablaProductosCopia").appendChild(filaCopia);

    document.getElementById("totalGeneral").textContent = total.toFixed(2);
    document.getElementById("totalGeneralCopia").textContent = total.toFixed(2);

    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
}

function eliminarProducto(boton, subtotal) {
    total -= subtotal;

    const index = [...boton.parentElement.parentElement.parentElement.children]
        .indexOf(boton.parentElement.parentElement);

    boton.parentElement.parentElement.remove();
    document.getElementById("tablaProductosCopia").children[index].remove();

    document.getElementById("totalGeneral").textContent = total.toFixed(2);
    document.getElementById("totalGeneralCopia").textContent = total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
    const numero = Math.floor(1000 + Math.random() * 9000);

    document.getElementById("numeroRemito").textContent = "Remito N° " + numero;
    document.getElementById("numeroRemitoCopia").textContent = "Remito N° " + numero;
});