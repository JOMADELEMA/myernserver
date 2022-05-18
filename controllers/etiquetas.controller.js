const etiquetasService = require("../services/etiquetas.service");

exports.listarEtiquetasProyecto = (req, res, next) => {
  const data = {
    id_proyecto: req.body.id_proyecto,
  };

  etiquetasService.listarEtiquetasProyecto(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    // console.log("log desde controller");
    // console.log(results);
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.listarEtiquetas = (req, res, next) => {
  const data = {};

  etiquetasService.listarEtiquetas(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.agregarEtiquetasProyecto = (req, res, next) => {
  const data = {
    id_etiqueta: req.body.id_etiqueta,
    id_proyecto: req.body.id_proyecto,
  };

  etiquetasService.agregarEtiquetasProyecto(data, (error, results) => {
    if (error) {
      console.log(error);

      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};
