const postsController = require("../controllers/posts.controller");
const { validateToken } = require("../jwt");

var express = require("express");
var router = express.Router();

router.get("/listar-posts", validateToken, postsController.listarPosts);
router.post("/agregar-post", postsController.agregarPost);

module.exports = router;
