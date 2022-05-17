const proyectosService = require("../services/proyectos.service");

exports.listarProyectos = (req, res, next) => {
  const data = {};

  proyectosService.listarProyectos(data, (error, results) => {
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

exports.listarMisProyectos = (req, res, next) => {
  const data = {
    id_usuario: req.body.id_usuario,
  };

  proyectosService.listarMisProyectos(data, (error, results) => {
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

exports.detalleProyecto = (req, res, next) => {
  const data = {
    id_proyecto: req.body.id_proyecto,
  };

  proyectosService.detalleProyecto(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad Request" });
    }
    return res.status(200).send({
      succes: 1,
      data: results,
    });
  });
};
