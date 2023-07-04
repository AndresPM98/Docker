const mongoose = require("mongoose");
const { MONGO_URL } = require("../config/envs");
const { characterSchema, filmSchema, planetSchema } = require("./schemas");

const conn = mongoose.createConnection(MONGO_URL);

const Character = conn.model("Character", characterSchema)
const Film = conn.model("Film", filmSchema)
const Planet = conn.model("Planet", planetSchema)


module.exports = {Character, Film, Planet}