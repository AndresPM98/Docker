const Planets= require("../data");
const { response } = require("../utils");

module.exports= async (req,res) => {
    const {name , _id} = req.body;
    const newPlanets = await Planets.create({name, _id})
    response(res, 201, newPlanets)
};
