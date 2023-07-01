const planets = require("./planets.json");

module.exports = {
    list: async () => {
        return planets;
    },
    create: async () => {
        throw Error("Hubo un error en la BDD al crear el planeta")
    }
};