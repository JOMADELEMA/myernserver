const db = require("../config/db.config");

exports.listarEtiquetas = (data, callback) => {
  db.query(
    `
        SELECT e.nombre
        FROM proyecto_x_etiqueta AS pe
        INNER JOIN etiqueta AS e ON pe.id_etiqueta = e.id_etiqueta 
        INNER JOIN proyecto AS p ON pe.id_proyecto = p.id_proyecto
        WHERE pe.id_proyecto = ?
        `,
    [data.id_proyecto],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results);
    }
  );
};
