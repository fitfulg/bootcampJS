// Eric Ramos Cardona
// Módulo 3 - Operadores y flujos de control
// "Bootcamp de Javascript" 
// https://campus-beta.lemoncode.net/


// Calcular precio total
var productos = {

    manzana: {
        count: 5,
        price: 2.55,
        type: "alimentacion"
    },

    camiseta: {
        count: 1,
        price: 9,
        type: "ropa"
    },

    comic: {
        count: 2,
        price: 6.90,
        type: "libro"
    }
}

function getTotal() {

    let precioTotal;
    let productoCount = (productos.manzana.count + productos.camiseta.count + productos.comic.count);
    let productoPrice = (productos.manzana.price + productos.camiseta.price + productos.comic.price);
    if (productoCount == 0) {
        return 0;
    } else if ((productoCount) > 0) {
        return ((productoCount) > 0) ? precioTotal = (productoCount * productoPrice) : precioTotal = 0;
    }
}

console.log(getTotal());

// calcular IVA
function getVat(totalIVA) {

    let IVA1 = 0.10,
        IVA2 = 0.04,
        IVA3 = 0.21;

    let totalM = productos.manzana.count * productos.manzana.price;
    let totalCa = productos.camiseta.count * productos.camiseta.price;
    let totalCo = productos.comic.count * productos.comic.price;

    let tA = productos.manzana.type;
    let tR = productos.camiseta.type;
    let tL = productos.comic.type;
    switch ((tA) && (tR) && (tL)) {
        case "alimentacion":
            totalM = totalM * IVA1;
            break;
        case "ropa":
            totalCa = totalCa * IVA2;
            break;
        case "libro":
            totalCo = totalCo * IVA3;
            break;
        default:
            ;
    }
    return totalIVA = totalM + totalCa + totalCo;
}

console.log(getVat());

// Calcular sueldo neto en nómina
const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
}

function nomina() {

    if (empleado.bruto < 12000) {
        empleado.bruto = empleado.bruto;
    } else if (empleado.bruto < 24000) {
        empleado.bruto /= 0.08;
    } else if (empleado.bruto < 34000) {
        empleado.bruto /= 0.16;
    } else empleado.bruto /= 0.30;

    if (empleado.hijos > 0) {
        empleado.bruto *= 0.20;
    }

    return empleado.bruto;
}

console.log(nomina())