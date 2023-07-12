const Characters= require("../data");
const { response } = require("../utils");

module.exports = async (req,res) => {
    const {title , _id} = req.body;
    const newCharacters = await Characters.create({title, _id});
    response(res, 201, newCharacters)
};