const Characters= require("../data");
const { response } = require("../utils");

module.exports = async (req,res) => {
    const {name , _id} = req.body;
    const newCharacters = await Characters.create({name, _id});
    response(res, 201, newCharacters)
};