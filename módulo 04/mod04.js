// Eric Ramos Cardona
// Módulo 4 - Funciones y eventos
// "Bootcamp de Javascript" 
// https://campus-beta.lemoncode.net/

// funciones
var suma = (a, b) => a + b;
var resta = (a, b) => a - b;
var multiplicacion = (a, b) => a * b;
var division = (a, b) => a / b;

console.log(suma(5, 5));
console.log(resta(5, 5));
console.log(multiplicacion(5, 5));
console.log(division(5, 5));

function calc() {
    // obtener primer numero
    var num1 = document.getElementById("campo1").value;

    // obtener segundo numero
    var num2 = document.getElementById("campo2").value;

    // obtener resultado
    var resul = document.getElementById("campo3").value;
    resul =
}