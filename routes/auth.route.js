const authController = require("../controllers/auth.controller");

var express = require("express");
var router = express.Router();

router.post("/registrar-usuario", authController.registrarUsuario);
router.post("/login", authController.validarUsuario);

module.exports = router;
