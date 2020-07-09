// Eric Ramos Cardona
// Modulo 5 - Laboratorio - Arrays y Bucles
// "Bootcamp de Javascript" 
// https://campus-beta.lemoncode.net/


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

// Listar todos los productos. 

// for (i = 0; i < carrito.length; i++) {
//     printF(carrito[i]);
// }

function printF(product) {
    console.log("id: " + product.id);
    console.log("name: " + product.name);
    console.log("price: " + product.price);
    console.log("count: " + product.count);
    console.log("premium: " + product.premium);
    console.log("==========================")
}

// Eliminar un producto (id: 3143) del carrito de la compra. 

var index = 0;

for (i = 0; i < carrito.length; i++) {
    if (product.id == 3143) {
        // MINUTO 37:19
    }
}

// var productos = [];
// for (i = 0; i < carrito.length; i++) {
//     productos += carrito[i];
//     //console.log(productos);
// }

// while (productos) {
//     if (carrito.id == 3143) {

//     }
// }

// Calcular el total del carrito de la compra (ojo aquí truco multiplicar cantidad por valor).



// Filtrar por los productos que sean prime