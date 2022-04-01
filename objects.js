var miCarro = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(this.modelo);
    }
};

console.log(miCarro);
console.log(miCarro.marca);
console.log(miCarro.modelo);
console.log(miCarro.annio);
miCarro.detalleDelAuto();