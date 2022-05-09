const db = require("../config/db.config");

exports.listarUsuarios = (data, callback) => {
  db.query("select * from myern.usuario", [], (error, results, fields) => {
    if (error) {
      console.log(error.message);
      return callback(error);
    }
    return callback(null, results);
  });
};
