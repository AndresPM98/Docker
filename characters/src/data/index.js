const { create } = require("domain");
const characters= require("./characters.json");

module.exports = {
    list: async ()=>{
        return characters;
    },
    create: async ()=>{
        throw Error("Hobo un error en la BDD al crear el personaje")
    },
};