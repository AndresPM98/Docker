const axios = require("axios");

module.exports = {
    list: async ()=>{
        const response = axios.get("http://database:8004/Film");
        return response
    },
    create: async ()=>{
        throw Error("Hubo un error en la BDD al crear la pelicula")
    },
};