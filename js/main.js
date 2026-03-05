let productos = [];
let total = 0;
let numeroRemito = Math.floor(1000 + Math.random() * 9000);

/* ================= CLIENTE ================= */

function agregarNombre() {

    const nombre = document.getElementById("name").value;

    if (nombre.trim() === "") {
        alert("Ingrese el nombre del cliente");
        return;
    }

    document.querySelectorAll(".cliente").forEach(el => {
        el.textContent = "Cliente: " + nombre;
    });

    document.getElementById("name").value = "";
}

/* ================= PRODUCTOS ================= */

function agregarProducto() {

    const producto = document.getElementById("producto").value;
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const precio = parseFloat(document.getElementById("precio").value);

    if (!producto || cantidad <= 0 || precio < 0) {
        alert("Complete correctamente los campos");
        return;
    }

    const subtotal = cantidad * precio;

    const item = {
        producto,
        cantidad,
        precio,
        subtotal
    };

    productos.push(item);

    renderTabla();

    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
}

/* ================= RENDER TABLAS ================= */

function renderTabla() {

    const tabla1 = document.getElementById("tablaProductos1");
    const tabla2 = document.getElementById("tablaProductos2");

    tabla1.innerHTML = "";
    tabla2.innerHTML = "";

    total = 0;

    productos.forEach((item, index) => {

        total += item.subtotal;

        /* BOLETA 1 */

        const fila1 = document.createElement("tr");

        fila1.innerHTML = `
            <td>${item.producto}</td>
            <td>${item.cantidad}</td>
            <td>$${item.precio}</td>
            <td>$${item.subtotal}</td>
            <td class="no-print">
                <button onclick="eliminarProducto(${index})">X</button>
            </td>
        `;

        tabla1.appendChild(fila1);

        /* BOLETA 2 (COPIA) */

        const fila2 = document.createElement("tr");

        fila2.innerHTML = `
            <td>${item.producto}</td>
            <td>${item.cantidad}</td>
            <td>$${item.precio}</td>
            <td>$${item.subtotal}</td>
        `;

        tabla2.appendChild(fila2);

    });

    document.querySelectorAll(".totalGeneral").forEach(el => {
        el.textContent = total;
    });
}

/* ================= ELIMINAR ================= */

function eliminarProducto(index) {

    productos.splice(index, 1);
    renderTabla();
}

/* ================= REMITO ================= */

document.addEventListener("DOMContentLoaded", function(){

    document.querySelectorAll(".numeroRemito").forEach(el => {
        el.textContent = "Remito N° " + numeroRemito;
    });

});

/* ================= FECHA ================= */

window.addEventListener("beforeprint", function(){

    const hoy = new Date();

    const fecha =
        hoy.getDate() + " / " +
        (hoy.getMonth() + 1) + " / " +
        hoy.getFullYear() + " - " +
        hoy.getHours() + ":" +
        hoy.getMinutes();

    document.querySelectorAll(".fechaActual").forEach(el=>{
        el.textContent = fecha;
    });

});