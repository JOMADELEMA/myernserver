const usuariosController = require("../controllers/users.controller");

var express = require("express");
var router = express.Router();

router.get("/listar-usuarios", usuariosController.listarUsuarios);

module.exports = router;
