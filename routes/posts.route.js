const postsController = require('../controllers/posts.controller');

var express= require('express');
var router = express.Router();

router.get("/listar-posts", postsController.listarPosts);

module.exports = router;