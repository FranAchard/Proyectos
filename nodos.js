var cajas =document.getElementsByTagName('div');



var caja = document.createElement('div');
var contenido = document.createTextNode('Esto es un parrafo en cursiva');
caja.appendChild(contenido);
caja.setAttribute('class', 'caja letra');

var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja); 