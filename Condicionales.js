//IF
var condicion;
if (condicion){
    console.log("Condicion Verdadera");
}else{
    console.log("Concicion False")
}


var edad;

if(edad < 18){
    console.log("No Puede Votar, Menor De Edad");
}else if(edad > 60 ){
    console.log("No puede Votar, Muy Mayor");
}else{
    console.log("Puede Votar");
}


//Switch
var numero = 1;
switch (numero) {
    case 1:
        console.log("Valor 1");
        break;
    case 10:
        console.log("Valor 10");
        break;
    default:
        console.log("No es ni 1 ni 10");
}

