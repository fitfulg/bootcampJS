// Eric Ramos Cardona
// Módulo 7 - Expresiones regulares
// "Bootcamp de Javascript" 
// https://campus-beta.lemoncode.net  

// VALIDAR UN IBAN
// ES6600190020961234567890
console.log('-----------Validar IBAN:');
// 1- Validar que se informa con dos letras, y los números correspondientes
// 2- Permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas
// 3- Extraer el código de páis y el dígito de control.
const ibanValues = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890', ];

const patternIBAN = /^((ES)\d{22})|((ES)\d{2}\s?(\d{4}\s?){4}\d{4})$/;
const patternIBAN2 = /^(ES)\d{2}/;

console.log('Case 1 & 2:');
ibanValues.forEach(value => {
    console.log('Regex matchs with ' + value + '? ->', patternIBAN.test(value));
})

console.log('Case 3');
ibanValues.forEach(value => {
    console.log('Regex matchs with ' + value + '? ->', patternIBAN2.exec(value));
})

// VALIDAR MATRÍCULA DE COCHE
console.log('-----------Validar Matrícula:');
// 2021 GMD
// 2345-GMD
// 4532BDB
// 0320-AAA
const idValue = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

const IDpattern = /^\d{4}\s?(-|\s|_)?[A-Z]{3}$/;
const numbPartPattern = /^(\d{4})/;
const charPartPattern = /[A-Z]{3}$/;

console.log('Case 1');
idValue.forEach(value => {
    console.log('Regex matchs with ' + value + '? ->', IDpattern.test(value));
})

console.log('Case 2');
idValue.forEach(value => {
    console.log('Regex matchs with? ->', numbPartPattern.exec(value), charPartPattern.exec(value));
})