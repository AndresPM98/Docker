const axios = require("axios");

module.exports = {
    list: async ()=>{
        const response = await axios.get("http://database:8004/Character");
        return response.data;
    },
    create: ()=>{
         throw Error("Hubo un error en la BDD al crear el personaje")
    },
};