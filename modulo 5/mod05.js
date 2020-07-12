// Eric Ramos Cardona
// Modulo 5 - Laboratorio - Arrays y Bucles
// "Bootcamp de Javascript" 
// https://campus-beta.lemoncode.net/

// OBLIGATORIO
// Mostrar una estructura de carrito de la compra.

const carrito = [{
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];

//EJERCICIO:  Listar todos los productos. 

document.write("<h2>Listado de compra</h2>")

function superPrint(product) {
    document.write("<p>id: " + product.id + "</p>");
    document.write("<p>name: " + product.name + "</p>");
    document.write("<p>price: " + product.price + "</p>");
    document.write("<p>count: " + product.count + "</p>");
    document.write("<p>premium: " + product.premium + "</p>");
    document.write("==========================");
    console.log("id: " + product.id);
    console.log("name: " + product.name);
    console.log("price: " + product.price);
    console.log("count: " + product.count);
    console.log("premium: " + product.premium);
    console.log("==========================");
}

function print(product) {
    document.write(product);
    console.log(product);
}

// for (i = 0; i < carrito.length; i++) {
//     superPrint(carrito[i]);
// }

//EJERCICIO: Eliminar un producto (id: 3143) del carrito de la compra. 

// var index;
// for (i = 0; i < carrito.length; i++) {
//     if (carrito.id == 3143) { //localizar posicion
//         index = i; //almacenar posicion conocida
//     }
// }

// carrito.splice(index, 1); // aplica splice al array para quitar ese elemento de index

// superPrint(carrito);

//EJERCICIO:  Calcular el total del carrito de la compra (ojo aquí truco multiplicar cantidad por valor).

// var total = 0;;
// for (i = 0; i < carrito.length; i++) {
//     total += carrito[i].price * carrito[i].count;
//     document.write("Name: " + carrito[i].name + "<br><br>");
//     console.log(carrito[i].name);
// }
// print("Total: " + total + "€");

//EJERCICIO:  Filtrar por los productos que sean prime

// var primeArr = [];
// for (i = 0; i < carrito.length; i++) {
//     if (carrito[i].premium == true) {
//         primeArr.push(carrito[i]);
//     }
// }
// console.log(primeArr);