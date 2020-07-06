// Eric Ramos Cardona
// Módulo 4 - Funciones y eventos
// "Bootcamp de Javascript" 
// https://campus-beta.lemoncode.net/

// funciones
function suma() {
    var x = parseInt(document.getElementById("campo1").value);
    var y = parseInt(document.getElementById("campo2").value);
    var z = x + y;
    document.getElementById("campo3").value = z;
}

function resta() {
    var x = parseInt(document.getElementById("campo1").value);
    var y = parseInt(document.getElementById("campo2").value);
    var z = x - y;
    document.getElementById("campo3").value = z;
}

function multi() {
    var x = parseInt(document.getElementById("campo1").value);
    var y = parseInt(document.getElementById("campo2").value);
    var z = x * y;
    document.getElementById("campo3").value = z;
}

function divi() {
    var x = parseInt(document.getElementById("campo1").value);
    var y = parseInt(document.getElementById("campo2").value);
    var z = x / y;
    document.getElementById("campo3").value = z;
}
//botón de reset 
function borrar() {
    document.getElementById('campo1').value = "";
    document.getElementById('campo2').value = "";
    document.getElementById('campo3').value = "";
}