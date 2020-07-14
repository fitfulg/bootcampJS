// Eric Ramos Cardona
// Módulo 6 - Algoritmos I - Laboratorio
// "Bootcamp de Javascript" 
// https://campus-beta.lemoncode.net/

// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;
// Entrada.
const products = [{
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

//1. HTML Dinámico

var setQuantity = (product) => {
    var quantity = document.createElement("input");
    quantity.setAttribute("type", "number");
    quantity.setAttribute("name", "quantity" + product.description);
    quantity.setAttribute("id", "item" + product.description);
    quantity.setAttribute("min", "0");
    quantity.setAttribute("max", product.stock);
    quantity.addEventListener("change", event => product.units = event.target.value);
    return quantity;
}

var showProducts = productList => {
    var container = document.getElementById("product-container");

    for (var product of productList) {

        // var ol = document.createElement("ol");
        // description.setAttribute("class", "product-ol");

        var description = document.createElement("ol");
        description.setAttribute("class", "product-ol");
        // document.getElementsByClassName("li").appendChild("ol");

        description.innerHTML = "<li>" + product.description + " - " + product.price + " € " + " - " + product.tax + "% tax ";
        container.appendChild(description);

        description.appendChild(setQuantity(product));

    }
}

showProducts(products);

//2. Calcular factura y mostrar desglose final del precio

var calcular = () => {

}
document.getElementById("btn").addEventListener("click", calcular);