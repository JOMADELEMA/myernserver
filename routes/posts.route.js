const postsController = require("../controllers/posts.controller");
const { validateToken } = require("../jwt");

var express = require("express");
var router = express.Router();

router.get("/listar-posts", validateToken, postsController.listarPosts);
router.post("/agregar-post", validateToken, postsController.agregarPost);
router.post("/listar-mis-posts", validateToken, postsController.listarMisPosts);
router.post("/post", validateToken, postsController.detallePost);

module.exports = router;
