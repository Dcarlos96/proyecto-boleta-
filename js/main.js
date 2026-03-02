let total = 0;

function agregarNombre() {
    const nombre = document.getElementById("name").value;

    if (nombre.trim() === "") {
        alert("Ingrese el nombre del cliente");
        return;
    }

    document.getElementById("clienteMostrado").textContent = "Cliente: " + nombre;
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

    const tabla = document.getElementById("tablaProductos");

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${producto}</td>
        <td>${cantidad}</td>
        <td>$${precio}</td>
        <td>$${subtotal}</td>
        <td class="no-print">
            <button class="no-print" onclick="eliminarProducto(this, ${subtotal})">X</button>
        </td>

    `;

    tabla.appendChild(fila);

    document.getElementById("totalGeneral").textContent = total;

    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
}

function eliminarProducto(boton, subtotal) {
    total -= subtotal;
    document.getElementById("totalGeneral").textContent = total.toFixed(2);
    boton.parentElement.parentElement.remove();
}

window.onbeforeprint = function () {

    const printArea = document.querySelector(".print-area");
    const original = document.querySelector(".container");

    const copia = document.createElement("div");
    copia.className = "container";
    copia.innerHTML = original.innerHTML; // duplicamos el contenido real

    copia.style.marginTop = "40px";
    copia.style.borderTop = "2px dashed black";

    printArea.appendChild(copia);
};

window.onafterprint = function () {
    location.reload();
};

window.onafterprint = function () {
    location.reload();
};


window.onafterprint = function () {
    location.reload();
};

document.addEventListener("DOMContentLoaded", function () {
    const numero = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("numeroRemito").textContent = "Remito N° " + numero;
});