const films= require("./films.json");

module.exports = {
    list: async ()=>{
        return films;
    },
    create: async ()=>{
        throw Error("Hubo un error en la BDD al crear la pelicula")
    },
};