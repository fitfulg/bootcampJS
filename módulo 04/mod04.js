// Eric Ramos Cardona
// Módulo 4 - Funciones y eventos
// "Bootcamp de Javascript" 
// https://campus-beta.lemoncode.net/

// funciones
var suma = (a, b) => a + b;
var resta = (a, b) => a - b;
var multiplicacion = (a, b) => a * b;
var division = (a, b) => a / b;

// Inputs
var num1 = () => parseInt(document.getElementById("campo1").value);
var num2 = () => parseInt(document.getElementById("campo2").value);

var SumResult = document.getElementById("resultado").innerText = suma(num1(), num2());
var SubsResult = document.getElementById("resultado").innerText = resta(num1(), num2());
var MultResult = document.getElementById("resultado").innerText = multiplicacion(num1(), num2());
var DivResult = document.getElementById("resultado").innerText = division(num1(), num2());

document.getElementById("button-mas") - addEventListener("click", SumResult);
document.getElementById("button-menos") - addEventListener("click", SumResult);
document.getElementById("button-por") - addEventListener("click", SumResult);
document.getElementById("button-dividido") - addEventListener("click", SumResult);




// () => document.getElementById("campo3").value;

// var sumar = () => {
//     console.log("resultado: " + suma(num1(), num2()));
// }


//(suma(num1, num2)) => document.getElementById("button-mas").value;



// var restar = (resta(num1, num2)) => document.getElementById("button-menos").value;
// var multiplicar = (multiplicacion(num1, num2)) => document.getElementById("button-por").value;
// var dividir = (division(num1, num2)) => document.getElementById("button-dividido").value;