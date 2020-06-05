const manzana = {
    count: 5,
    price: 2.55,
    type: "alimentacion"
};

const camiseta = {
    count: 1,
    price: 9,
    type: "ropa"
};

const comic = {
    count: 2,
    price: 6.90,
    type: "libro"
};

if (manzana.count > 0 || camiseta.count > 0 || comic.count > 0) {
    TotalMa = manzana.count * manzana.price;
    TotalCa = camiseta.count * camiseta.price;
    TotalCo = comic.count * comic.price;
}
console.log(getTotal);

// function getTotal() {
//     var total;
//     var a = prompt("¿De qué quieres saber el precio total? Escribe opciones: manzana, camiseta o comic");
//     switch (a) {
//         case "manzana":
//             total = ((manzana.count * manzana.price) * 0.1);
//             break;
//         case "camiseta":
//             total = ((camiseta.count * camiseta.price) * 0.2);
//             break;
//         case "comic":
//             total = ((comic.count * comic.price) * 0.4);
//             break;
//         default:
//             total = "Incorrecto";
//     }
// }
// console.log(getTotal());


// prompt("¿De qué quieres saber el precio total? Escribe opciones: manzana, camiseta o comic", getTotal())

// function getTotal(count, price) {
//     if (count == 0) {
//         return 0;
//     } else if (count > 0) {
//         return count * price
//     }
// }

// console.log(getTotal);