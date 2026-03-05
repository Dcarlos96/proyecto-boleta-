let total = 0;

function agregarNombre(){

const nombre = document.getElementById("name").value;

if(nombre.trim()===""){
alert("Ingrese el nombre del cliente");
return;
}

document.querySelectorAll(".cliente").forEach(el=>{
el.textContent="Cliente: "+nombre;
});

}

function agregarProducto(){

const producto=document.getElementById("producto").value;
const cantidad=parseFloat(document.getElementById("cantidad").value);
const precio=parseFloat(document.getElementById("precio").value);

if(!producto || cantidad<=0 || precio<0){
alert("Complete correctamente los campos");
return;
}

const subtotal=cantidad*precio;
total+=subtotal;

const fila1=document.createElement("tr");

fila1.innerHTML=`
<td>${producto}</td>
<td>${cantidad}</td>
<td>$${precio}</td>
<td>$${subtotal}</td>
<td class="no-print">
<button onclick="eliminarProducto(this,${subtotal})">X</button>
</td>
`;

document.getElementById("tablaProductos1").appendChild(fila1);


/* COPIA */

const fila2=document.createElement("tr");

fila2.innerHTML=`
<td>${producto}</td>
<td>${cantidad}</td>
<td>$${precio}</td>
<td>$${subtotal}</td>
`;

document.getElementById("tablaProductos2").appendChild(fila2);


/* TOTAL */

document.querySelectorAll(".totalGeneral").forEach(el=>{
el.textContent=total;
});


document.getElementById("producto").value="";
document.getElementById("cantidad").value="";
document.getElementById("precio").value="";

}


function eliminarProducto(boton,subtotal){

total-=subtotal;

document.querySelectorAll(".totalGeneral").forEach(el=>{
el.textContent=total;
});

boton.parentElement.parentElement.remove();

}


/* REMITO */

document.addEventListener("DOMContentLoaded",function(){

const numero=Math.floor(1000+Math.random()*9000);

document.querySelectorAll(".numeroRemito").forEach(el=>{
el.textContent="Remito N° "+numero;
});

});


/* FECHA AUTOMATICA */

window.onbeforeprint=function(){

const hoy=new Date();

const fecha=
String(hoy.getDate()).padStart(2,'0')+" / "+
String(hoy.getMonth()+1).padStart(2,'0')+" / "+
hoy.getFullYear();

document.getElementById("fecha1").textContent="Fecha: "+fecha;
document.getElementById("fecha2").textContent="Fecha: "+fecha;

};