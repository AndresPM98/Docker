const { Router } = require("express");
const controllers = require("../controllers")
const middlewares = require("../middlewares")

const router = Router();

router.get("/", controllers.getCharacters);
router.get("/:id", controllers.getCharacterById);
router.post("/", middlewares.charactersValidations, controllers.createCharacters)
router.delete("/:id", controllers.deleteCharacter);




module.exports = router;
