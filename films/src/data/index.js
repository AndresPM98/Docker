const films= require("./films.json");

module.exports = {
    list: async ()=>{
        return films;
    },
    create: async ()=>{
        throw Error("Hobo un error en la BDD al crear el personaje")
    },
};