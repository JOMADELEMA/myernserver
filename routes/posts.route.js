const postsController = require("../controllers/posts.controller");
const { validateToken } = require("../jwt");

var express = require("express");
var router = express.Router();

router.get("/listar-posts", validateToken, postsController.listarPosts);
router.post("/agregar-post", postsController.agregarPost);
router.post("/listar-mis-posts", validateToken, postsController.listarMisPosts);

module.exports = router;
