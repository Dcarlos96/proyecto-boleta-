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
        <td>$${precio.toFixed(2)}</td>
        <td>$${subtotal.toFixed(2)}</td>
        <td class="no-print">
            <button class="no-print" onclick="eliminarProducto(this, ${subtotal})">X</button>
        </td>

    `;

    tabla.appendChild(fila);

    document.getElementById("totalGeneral").textContent = total.toFixed(2);

    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
}

function eliminarProducto(boton, subtotal) {
    total -= subtotal;
    document.getElementById("totalGeneral").textContent = total.toFixed(2);
    boton.parentElement.parentElement.remove();
}