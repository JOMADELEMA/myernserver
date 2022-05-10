const db = require('../config/db.config');

exports.registrarUsuario = (data, callback)=> {
    db.query(
        `INSERT INTO myern.usuario
        (id_usuario, nombre, apellido, contrasena, id_rol)
        VALUES
        (?,?,?,?,?)`,
        [data.id_usuario, data.nombre, data.apellido, data.contrasena, data.id_rol],
        (error, results, fields)=>{
            if(error){
                return callback(error);
            }
            return callback(null, "Usuario registrado correctamente.");
        }
    );
};

exports.validarUsuario = (data, callback)=> {
    db.query(
        `SELECT * FROM 
        myern.usuario
        WHERE id_usuario = ? LIMIT 1`, 
        [data.id_usuario],
        (error, results, fields)=>{
            if(error){
                return callback(error.message);
            }
            return callback(null, results);
        }
    );
};