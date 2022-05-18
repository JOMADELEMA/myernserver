const  etiquetasController = require("../controllers/etiquetas.controller");
const {validateToken} = require("../jwt");

var express = require("express");
var router = express.Router();

router.post("/listar-etiquetas-proyecto", validateToken, etiquetasController.listarEtiquetasProyecto);
router.get("/listar-etiquetas", validateToken, etiquetasController.listarEtiquetas);

module.exports = router;