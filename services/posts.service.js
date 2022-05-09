const db = require("../config/db.config");

exports.listarPosts = (Data, callback) => {

  console.log("llamada a Servicio")
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
      console.log("sin error en servicio")
      return callback(null, results);

    }
  );
};

exports.agregarPost = (data, callback) => {
  db.query(
    `INSERT INTO 
    myern.post (id_post, texto, fecha_creacion, id_usuario)
    VALUES (?, ?, ?, ?)
    `,
    [data.id_post, data.texto, data.fecha_creacion, data.id_usuario],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, "Post agregado exitosamente");
    }
  );
};
