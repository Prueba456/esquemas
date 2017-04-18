var contenedor = document.getElementById("contenedor");
var morado = document.createElement("div");
morado.setAttribute("id","purple");
contenedor.appendChild(morado);

var green = document.createElement("div");
green.setAttribute("id","green");
contenedor.appendChild(green);

var yellow = document.createElement("div");
yellow.setAttribute("id","caja");
morado.appendChild(yellow);

var black = document.createElement("div");
black.setAttribute("id","cajaNegra");
green.appendChild(black);
