const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { model, id } = req.params;

  if (["Character", "Film", "Planet"].includes(model)) {
    // Realiza la validación del ID para todos los modelos
    if (!Number.isInteger(parseInt(id))) {
      throw new ClientError("Invalid ID", 404);
    }

    return next();
  } else {
    throw new ClientError("Invalid Model", 401);
  }
};