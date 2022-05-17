const etiquetasService = require("../services/etiquetas.service");

exports.listarEtiquetas = (req, res, next) => {
  const data = {
    id_proyecto: req.body.id_proyecto,
  };

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
