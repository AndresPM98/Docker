const axios = require("axios");

module.exports = {
    list: async ()=>{
        const response = axios.get("http://database:8004/Character");
        return response
    },
    create: async ()=>{
        throw Error("Hobo un error en la BDD al crear el personaje")
    },
};