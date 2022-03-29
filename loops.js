var estudiantes = ["Emiliano", "Wendy", "Ricardo", "Bianka", "Jose"]

for(var i = 0;i<estudiantes.length;i++){
    console.log("Hola "+estudiantes[i]);
}

console.log("\n");

for(var estudiante of estudiantes){
console.log("Hola "+estudiante)
}

console.log("\n");

var j = 0;
while(j<estudiantes.length){
    console.log("Hola "+estudiantes[j]);
    j++;
}