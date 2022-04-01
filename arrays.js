var frutas = ["Mango", "Platano", "Cereza", "Fresa"];

console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);


var masFrutas = frutas.push("Uvas");

console.log(frutas);

var ultimo = frutas.pop();

console.log(frutas);

var nuevo = frutas.unshift("Uvas")

console.log(frutas);

var masarays = frutas.shift("Uvas");

console.log(frutas);

var posicion = frutas.indexOf("Cereza");

console.log(posicion);


var articulos = [
    { nombre: "Bicicleta", costo: 3000},
    { nombre:  "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo:20000},
    { nombre: "Teclado", costo:500},
    { nombre: "Audifonos", costo:1700},
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

console.log(articulosFiltrados);

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

console.log(nombreArticulos)


var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

console.log(encuentraArticulo);

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

