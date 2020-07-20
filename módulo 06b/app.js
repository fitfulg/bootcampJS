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
// Generar 10 números aleatorios entre el 1 y el 100.
// Devolverá un array con dichos números. Ejemplo de output: [24, 83, 2, 94, 84, 38, 23, 69, 16, 89];

// const randomPick = (n, min, max) => {
//     var arr = [];
//     range = max - min + 1;

//     Random = Math.floor(Math.random() * range) + min;
//     for (i = 0; i >= 9; i++) {
//         random = Random[i];
//     }
//     return random[n];
//     // Array = [n];
//     // return Array[Math.floor(Math.random() * range) + min];
// }

// console.log(randomPick(10, 1, 100));

var arr = [];
for (var u = 0; u = 100; u++) {
    for (var i = 0, l = 10; i < l; i++) {

    }
    arr.push(Math.round(Math.random() * l))
}
console.log(arr);

console.log(randomPick(10, 1, 100));
// https://stackoverrun.com/es/q/1444877
// https://jsfiddle.net/robert/tUW89/