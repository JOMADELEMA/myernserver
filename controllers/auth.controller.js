const authService = require("../services/auth.service");
const bcrypt = require("bcrypt");

exports.registrarUsuario = (req, res, next) => {
  bcrypt
    .hash(req.body.contrasena, 10)
    .then((hash) => {
      const data = {
        id_usuario: req.body.id_usuario,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        contrasena: hash,
      };

      authService.registrarUsuario(data, (error, results) => {
        if (error) {
          console.log(error);
          return res.status(400).send({ success: 0, data: "Bad Request" });
        }
        return res.status(200).send({
          success: 1,
          data: results,
        });
      });
    })
    .catch((error) => {
      console.log(error);
      return res
        .status(400)
        .send({ success: 0, data: "Bad Request", mensaje: error });
    });
};

exports.validarUsuario = (req, res, next) => {
  const data = {
    id_usuario: req.body.id_usuario,
    contrasena: req.body.contrasena,
  };

  authService.validarUsuario(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad Request" });
    }
    if (results.length == 0) {
      return res
        .status(400)
        .send({ success: 0, data: "Usuario o contraseña Invalidos" });
    }

    const dbPass = results[0].contrasena;

    bcrypt.compare(req.body.contrasena, dbPass, (err, result) => {
      console.log(result);
      console.log("............");

      if (!result) {
        console.log("No hay match");
        return res
          .status(400)
          .send({ success: 0, data: "Usuario o contraseña Invalidos" });
      }

      console.log("Si hay match");

      return res.status(200).send({ success: 1, data: results });
    });
  });
};
