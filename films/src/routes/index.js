const { Router } = require("express");
const controllers = require("../controllers")
const middlewares = require("../middlewares")

const router = Router();

router.get("/", controllers.getFilms);
router.get("/:id", controllers.getFilmById);
router.post("/", middlewares.filmsValidations, controllers.createFilms)
router.delete("/:id", controllers.deleteFilm);


module.exports = router;