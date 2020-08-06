import axios from "axios";

// comunicación con la API en https://rickandmortyapi.com/
function getCharacters() {
    return axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
            const charPromise = new Promise(resolve => {
                setTimeout(function() {
                    resolve(response.data);
                }, 2000);
            });
            return charPromise;
        });
}

export { getCharacters };