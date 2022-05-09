const db = require('../config/db.config');

exports.registrarUsuario = (data, callback)=> {
    db.query(
        `INSERT INTO myern.usuario
        (id_usuario, nombre, apellido, contrasena)
        VALUES
        (?,?,?,?)`,
        [data.id_usuario, data.nombre, data.apellido, data.contrasena],
        (error, results, fields)=>{
            if(error){
                return callback(error);
            }
            return callback(null, "Usuario registrado correctamente.");
        }
    );
};