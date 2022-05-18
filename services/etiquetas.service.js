const db = require("../config/db.config");

exports.listarEtiquetasProyecto = (data, callback) => {
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
      // console.log("desde servicio")
      // console.log(results);
      return callback(null, results);
    }
  );
};

exports.listarEtiquetas = (data, callback) => {
  db.query(
    `
    SELECT * FROM myern.etiqueta;
    `,
    [],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(null, results);
      }
      return callback(null, results);
    }
  );
};

exports.agregarEtiquetasProyecto = (data, callback) => {
  db.query(
    `
      INSERT INTO myern.proyecto_x_etiqueta (id_etiqueta, id_proyecto)
      VALUES (?, ?);
    `,
    [data.id_etiqueta, data.id_proyecto],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(null, results);
      }
      return callback(null, results);
    }
  );
};
