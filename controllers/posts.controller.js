const postsService = require("../services/posts.service");

exports.listarPosts = (req, res, next) => {
  const data = {};

  postsService.listarPosts(data, (error, results) => {
    console.log("llamada a Controlador");
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad Request" });
    }
    console.log("sin error en controlador");
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.agregarPost = (req, res, next) => {
  const data = {
    texto: req.body.texto,
    fecha_creacion: req.body.fecha_creacion,
    id_usuario: req.body.id_usuario,
  };

  postsService.agregarPost(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad Request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.listarMisPosts = (req, res, next) => {
  // console.log(req.body);
  const data = {
    id_usuario: req.body.id_usuario,
  };

  postsService.listarMisPosts(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad Request" });
    }

    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};
