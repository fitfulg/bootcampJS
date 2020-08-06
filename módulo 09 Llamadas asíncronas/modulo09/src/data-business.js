import axios from "axios";

// comunicación con la API en https://breakingbadapi.com/documentation
function getCharacters() {
    return axios
        .get("https://www.breakingbadapi.com/api/characters")
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