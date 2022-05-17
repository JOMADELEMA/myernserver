const proyectosController = require("../controllers/proyectos.controller");
const {validateToken} = require("../jwt");

var express = require("express");
var router = express.Router();

router.get("/listar-proyectos", validateToken, proyectosController.listarProyectos);
router.post("/listar-mis-proyectos", validateToken, proyectosController.listarMisProyectos);
router.post("/proyecto", validateToken, proyectosController.detalleProyecto);

module.exports = router;