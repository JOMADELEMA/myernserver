const db = require("../config/db.config");

exports.listarPosts = (Data, callback) => {
  db.query(
    `
    SELECT * FROM myern.post
    `,
    [],
    (error, results, fields) => {
      if (error) {
        console.log(error.message);
        return callback(error);
      }
      return callback(null, results);
    }
  );
};

exports.agregarPost = (data, callback) => {
  db.query(
    `INSERT INTO 
      myern.post (texto, fecha_creacion, id_usuario)
      VALUES (?, ?, ?)
      `,
    [data.texto, data.fecha_creacion, data.id_usuario],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, "Post agregado exitosamente");
    }
  );
};

exports.listarMisPosts = (data, callback) => {
  // console.log("llamada a Servicio");
  // console.log(data);

  db.query(
    `
    SELECT * FROM myern.post 
    WHERE id_usuario = ?
  `,
    [data.id_usuario],
    (error, results, fields) => {
      if (error) {
        console.log(error.message);
        return callback(error);
      }
      // console.log(results);
      return callback(null, results);
    }
  );
};
