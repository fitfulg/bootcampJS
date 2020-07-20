// Eric Ramos Cardona
// Módulo 6 - Algoritmos II - Laboratorio "ALGORITMO DE ENCRIPTACIÓN"
// "Bootcamp de Javascript" 
// https://campus-beta.lemoncode.net/

//----------------------------------------------------------//
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,x'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
//----------------------------------------------------------//

var userNormalText = () => document.getElementById("normal-message").value;
var userEncriptedTex = () => document.getElementById("encrypted-message").value;

var encriptedText = () => document.getElementById("encrypted-message").value = transformMessage(userNormalText(), plainAlphabet, encryptedAlphabet);
var decriptedText = () => document.getElementById("normal-message").value = transformMessage(userEncriptedTex(), encryptedAlphabet, plainAlphabet);


var searchIndex = (alphabet, letter) => {
    for (i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === letter) return i
    }
    return -1;
}

var transformLetter = (letter, origin, destiny) => {
    var letterIndex = searchIndex(origin, letter);
    var transformed = destiny[letterIndex];
    return (letterIndex === -1) ? letter : transformed;
}

var transformMessage = (message, origin, destiny) => {
    var messageLowerCased = message.toLowerCase();
    var result = "";

    for (var letter of messageLowerCased) {
        result = result + transformLetter(letter, origin, destiny);
    }
    return result;
}

var getEncryption = () => {
    encriptedText();
}

var getDecryption = () => {
    decriptedText();
}

document.getElementById("encrypt").addEventListener("click", getEncryption);
document.getElementById("decrypt").addEventListener("click", getDecryption);

// EJERCICIO: GENERADOR ALEATORIO

var randomPick = (n, min, max) => {
    // generar array con rango y recorrerlo
    var arr = new Array(max);
    for (var i = min; i < max; i++) {
        arr[i] = i + 1;
    }
    // darle ordenamiento al azar
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    // dividirlo en n partes
    var a = arr.slice(0, n);
    console.log("Generador Aleatorio: " + a);
    document.write("Generador Aleatorio: " + a);
}

randomPick(10, 1, 100);