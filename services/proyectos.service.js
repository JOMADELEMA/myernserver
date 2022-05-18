const db = require("../config/db.config");

exports.listarProyectos = (data, callback) => {
  db.query(`SELECT * FROM myern.proyecto`, [], (error, results, fields) => {
    if (error) {
      console.log(error.message);
      return callback(error);
    }
    return callback(null, results);
  });
};

exports.listarMisProyectos = (data, callback) => {
  db.query(
    `SELECT * FROM myern.proyecto
        WHERE id_usuario = ?`,
    [data.id_usuario],
    (error, results, fields) => {
      if (error) {
        console.log(error.message);
        return callback(error);
      }
      return callback(null, results);
    }
  );
};

exports.detalleProyecto = (data, callback) => {
  db.query(
    `SELECT * FROM myern.proyecto
            WHERE id_proyecto = ?`,
    [data.id_proyecto],
    (error, results, fields) => {
      if (error) {
        console.log(error.message);
        return callback(error);
      }
      return callback(null, results);
    }
  );
};

exports.agregarProyecto = (data, callback) => {
  db.query(
    `
      INSERT INTO myern.proyecto
      (descripcion, comentarios, fecha_creacion, id_usuario)
      VALUES (?,?,?,?);
      `,
    [data.descripcion, data.comentarios, data.fecha_creacion, data.id_usuario],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      // console.log(results);
      return callback(null, results.insertId);
    }
  );
};
