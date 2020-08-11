// hasId
// Implementa una función llamada hasId 
//  que admita como parámetro un objeto y compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true/false).
// TIP: No accedas a 'id' con punto (.) o con corchetes ([]).
const object = {
    id: 1,
    name: "Eric",
    age: 35
};

const hasId = ({ id }) => id ? true : false;
console.log(hasId(object));

// head
// Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.
// TIP: No utilices el corchete ([]) para acceder a la posición 0.
const headArr = ["a", "b", "c"];
const head = ([zeroIndex]) => zeroIndex;
console.log(head(headArr));

// tail
// Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los elementos menos el primero.
// TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.
const tailArr = ["excluded", 1, true, "last"];
const tail = ([, ...rest]) => rest;
console.log(tail(tailArr));

// swapFirstToLast
// Implementa una función llamada swapFirstToLast tal que, 
// dado un array como entrada, devuelva un nuevo array donde el primer elemento ha sido colocado en la última posición.
// TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.
const swapArr = [1, 2, 3];
const swapFirstToLast = ([first, ...rest]) => [...rest, first];
console.log(swapFirstToLast(swapArr));

// excludeId
// Implementa una función llamada excludeId tal que, 
// dado un objeto como entrada, devuelva dicho objeto clonado excepto la propiedad id si la hubiera.
// TIP: No modifiques el objeto de entrada. Piensa en destructuring y rest.
const object2 = {
    id: 1,
    name: "Eric",
    age: 35
};
const exclueId = ({ id, ...rest }) => rest;
console.log(exclueId(object2));

// wordsStartingWithA
// Implementa una función llamada wordsStartingWithA tal que,
// dado un array de palabras como entrada, devuelva otro array filtrado con aquellas palabras que empiecen por a.
// TIP: No utilices bucles.
const goddesses = ["Amaterasu", "Selene", "Atenea", "Tsukuyomi"];
const wordsStartingWithA = (goddesses) =>
    goddesses.filter(([goddess]) => goddess.toLowerCase() == "a");

console.log(wordsStartingWithA(goddesses));

// concat
// Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la concatenación de todos, separados por |.
// TIP: No utilices bucles.
const concat = (...items) => items.join(" | ");
console.log(concat("Part 1", "Part 2", "Part 3", "Part 4"));

// multArray
// Implementa una función llamada multArray 
// que admita un array de números (arr) y otro parámetro que sea un número (x) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.
// TIP: No utilices bucles.
const arr = [1, 2, 3, 4, 5, 6, 7];
const multArray = (arr, x) => arr.map((item) => item * x);
console.log(multArray(arr, 3));

// calcMult
// Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el producto de todos ellos.
// TIP: No utilices bucles.
const calcMult = (...n) =>
    n.reduce((acc, n) => acc * n, 1);

console.log(calcMult(1, 2, 3));

// swapFirstSecond
// Implementa una función swapFirstSecond tal que dado un array,
// devuelva un nuevo array donde el primer elemento ha sido intercambiado por el segundo.
// TIP: No modifiques el array de entrada original.
const swapArr2 = [1, 2, 3];
const swapFirstSecond = ([first, second, ...rest]) => [second, first, ...rest];
console.log(swapFirstSecond(swapArr2));

// firstEqual
// Implementa una función firstEqual tal que 
// admita multiples strings como argumento de entrada así como un carácter cualquiera, 
// y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.
// TIP: No utilices bucles. No accedas al primer carácter con corchetes ([]).
const firstEqual = (char, ...strings) =>
    strings.every(([first]) => first.toLowerCase() === char);

console.log(firstEqual("l", "Lemoncode", "Lorca", "libelula"));

// longest
// Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.
// TIP: No utilices bucles. Hay diversas formas de hacerlo.
const longest = (...arrays) =>
    arrays
    .sort((a, b) => (a.length > b.length ? -1 : 1))
    .reduce((array) => array);

console.log(longest(
    [1, 2, 3], [1, 2], [1, 2, 3, 4]));

// searchInStringV1
// Implementa una función llamada searchInStringV1 tal que
// dado un string como parámetro y también un carácter, 
// devuelva cuantas veces aparece dicho carácter en el string.
// TIP: No utilices bucles.
// TIP: Convierte el string a un array mediante Array.from().
const searchInStringV1 = (string, char) =>
    Array.from(string).reduce((acc, letter) =>
        (letter === char ? acc + 1 : acc), 0);

console.log(searchInStringV1("supercalifragilisticoespialidoso", "i"));

// searchInStringV2
// Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2, 
// encontrando otra alternativa sin usar reduce.
// TIP: No utilices bucles.
// TIP: Convierte el string a un array mediante Array.from().
const searchInStringV2 = (string, char) => {
    let acc = 0;
    Array.from(string)
        .map((letter) => (letter === char ? acc++ : acc));
    return acc;
};
console.log(searchInStringV2("supercalifragilisticoespialidoso", "i"));

// sortCharacters
// Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas alfabéticamente.
// TIP: No utilices bucles. No modifiques el string original de entrada.
// TIP: Convierte el string a un array mediante Array.from().
const sortCharacters = (string) =>
    Array.from(string)
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");

console.log(sortCharacters("supercalifragilisticoespialidoso"));

// shout
// Implementa una función llamada shout tal que, 
// dadas múltiples palabras como entrada, devuelva todas las palabras concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.
// TIP: No utilices bucles.
const shout = (...strings) =>
    strings.reduce((acc, string) => `${acc} ${string.toUpperCase()}! `, "");

console.log(shout("dorico", "jonico", "corintio"));

// Lista de la compra
// Dada la siguiente lista de la compra:
const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

// A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
const iva = (tax, products) =>
    products.map((product) => ({...product, tax: product.price * 0.21 }));

console.log(iva("tax", shoppingCart));

// B. Ordena la lista de más a menos unidades.
const sortUnits = (products) =>
    products.sort((a, b) => (a.units > b.units ? -1 : 1));

console.log(sortUnits(shoppingCart));

// C. Obtén el subtotal gastado en droguería.
const getSubTotal = (products) =>
    products.reduce((acc, product) => {
        if (product.category === "Droguería") acc += product.price * product.units;
        return acc;
    }, 0);

console.log(getSubTotal(shoppingCart));

// D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
// TIP: No utilices bucles.
const productPrice = (products) =>
    products
    .sort((a, b) => (a.category > b.category ? 1 : -1))
    .map((product) =>
        console.log(`·${product.product}: ${product.price * product.units}€`)
    );
productPrice(shoppingCart);