var hoteles = {
    WBarcelona: {
        name: "W Barcelona",
        location: "Barcelona",
        img: "https://www.7canibales.com/wp-content/uploads/2009/10/w-barcelona.jpg",
    },
    Arts: {
        name: "Arts",
        location: "Barcelona",
        img: "https://info.bcnluxapartments.com/wp-content/uploads/2018/06/Hotel_Arts_A_exterior_01-221x300.jpg",
    },
};


var selectedHotel = prompt("Indique hotel sobre el que quiere hacer la reseña: WBarcelona o Arts");

document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectedHotel].name + "<hr>";

document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectedHotel].location + "<hr>";

document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

var anonymous = confirm("¿Quiere que la reseña sea anónima?");

document.getElementById("anonymous").checked = anonymous;


var stars = {
    bajo: "<span>&#0128;</span>",

    una: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",

    dos: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",

    medio: "<span>&#0128;</span><span>&#0128;</span><span>&#0128;</span>",

    tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",

    cuatro: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",

    alto: "<span>&#0128;</span><span>&#0128;</span><span>&#0128;</span><span>&#0128;</span><span>&#0128;</span>",

    cinco: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");

var coste = prompt("Coste: alto, medio o bajo");

document.getElementById("rating").innerHTML = stars[rating];

document.getElementById("coste").innerHTML = stars[coste];