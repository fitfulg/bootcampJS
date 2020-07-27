// Eric Ramos Cardona
// Modulo 6 - Laboratorio - Algoritmos III
// "Bootcamp de Javascript" 
// https://campus-beta.lemoncode.net

// AGENDA

// Constantes
const WORK_HOURS = [];
const schedule = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
var myTeam = [{
        name: "María",
        availability: WORK_HOURS.fill(true)
    },
    {
        name: "Pedro",
        availability: WORK_HOURS.fill(true)
    },
    {
        name: "Esther",
        availability: WORK_HOURS.fill(true)
    },
    {
        name: "Marcos",
        availability: WORK_HOURS.fill(true)
    },
];

var matchMessage = "Lo siento. No hay hueco disponible en el equipo.";
var arrOf8 = [0, 0, 0, 0, 0, 0, 0, 0];

// GENERACION ALEATORIA

// Printa miembro y disponibilidad
var printAvailability = (myTeam) => {
    for (var i = 0; i < myTeam.length; i++) {
        console.log("Disponibilidad de " + myTeam[i].name);
        for (var ii = 0; ii < schedule.length; ii++) {
            console.log(schedule[ii] + " -> " + myTeam[i].availability[ii]);
        }
    }
};

// Asigna aleatoriedad en las disponibilidades
var setRandom = (n, min, max) => {
    var ynArr = new Array(8);
    for (var i = 0; i < ynArr.length; i++) {
        const result = Math.floor(Math.random() * ((max - min)) + 1) + min;
        result < 5 ? ynArr[i] = "SI" : ynArr[i] = "NO";
    }
    return ynArr;
};

// Recorre array y en caso de hueco encontrado modifica el mensaje almacenado en "matchMessage" 
var match = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        arr[i] === 4 ? matchMessage = "¡Hueco encontrado! En el horario: " + schedule[i] : false;
    }
    return matchMessage;
};

// Busca un hueco libre en el horario de cada miembro 
var findMatch = (member) => {
    for (var i = 0; i < member.availability.length; i++) {
        if (member.availability[i] === "SI") {
            arrOf8[i]++;
        }
    }
};

// Función principal que recorre todos los miembros asignando su disponibilidad y llama a las demás funciones
var mainRandom = (myTeam) => {
    for (var members of myTeam) {
        members.availability = setRandom(1, 1, 10);
        findMatch(members);
    }
    printAvailability(myTeam);
    console.log(match(arrOf8));
};
mainRandom(myTeam);

//CALCULADORA DE CAMBIO DE BILLETES Y MONEDAS

// --------------------------------------------------------------------------------------//
const coinValue = [200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
var coinType;
// --------------------------------------------------------------------------------------//

// división para el cambio
var getChange = (ammountPayed, change) => change / ammountPayed;

// Almacena los resultados del cambio en una lista creada
var resultsList = message => {
    var list = document.getElementById("list");
    var item = document.createElement("li");
    item.innerText = message;
    return list.appendChild(item);
}

// Cálculo de la devolución
var calculate = () => {
    var total = document.getElementById("total").value;
    var payed = document.getElementById("payed").value;
    var change = payed - total;

    for (var money of coinValue) {
        var result = getChange(money, change);
        if (result >= 1) {
            change -= parseInt(result) * money;
            money <= 2 ? coinType = "moneda/s" : coinType = "billete/s";
            var msg = parseInt(result) + " " + coinType + " de " + money + "€";
            resultsList(msg);
        }
    }
    return change;
};

// Crea HTML dinámico y printa inputs + button
var printAll = () => {
    // nodo padre
    var father = document.getElementById("inputsNode");

    // divs
    var divTotal = document.createElement("div");
    var divPayed = document.createElement("div");

    // inputs
    var inputTotal = document.createElement("input");
    inputTotal.setAttribute("type", "number");
    inputTotal.setAttribute("id", "total");
    var inputPay = document.createElement("input");
    inputPay.setAttribute("type", "number");
    inputPay.setAttribute("id", "payed");

    // labels
    var labelTotal = document.createElement("label");
    labelTotal.innerText = "Total a pagar: ";
    var labelPay = document.createElement("label");
    labelPay.innerText = "Importe recibido: ";

    // button
    var button = document.createElement("button");
    button.setAttribute("id", "calculate");
    button.innerText = "Devolver cambio";

    // disposición
    father.appendChild(divTotal).appendChild(labelTotal);
    father.appendChild(divTotal).appendChild(inputTotal);
    father.appendChild(divPayed).appendChild(labelPay);
    father.appendChild(divPayed).appendChild(inputPay);
    father.appendChild(button);

    // Evento que se ejecuta al hacer click al button y que apunta a la funcion calculate() 
    button.addEventListener("click", calculate);
};

printAll();