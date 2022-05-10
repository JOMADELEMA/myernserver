const authService = require("../services/auth.service");
const bcrypt = require("bcrypt");
const { createTokens } = require("../jwt");

exports.registrarUsuario = (req, res, next) => {
  bcrypt
    .hash(req.body.contrasena, 10)
    .then((hash) => {
      const data = {
        id_usuario: req.body.id_usuario,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        contrasena: hash,
        id_rol: req.body.id_rol,
      };

      console.log("data en controller");
      console.log(data);

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
      if (!result) {
        return res
          .status(400)
          .send({ success: 0, data: "Usuario o contraseña Invalidos" });
      }

      const usuario = {
        id_usuario: results[0].id_usuario,
        nombre: results[0].nombre,
        apellido: results[0].apellido,
        id_rol: results[0].id_rol,
      };

      const accessToken = createTokens(usuario);

      res.cookie("access-token", accessToken, {
        maxAge: 60 * 60 * 24 * 1000,
        httpOnly: true,
      });

      return res
        .status(200)
        .send({ success: 1, data: usuario, token: accessToken });
    });
  });
};
