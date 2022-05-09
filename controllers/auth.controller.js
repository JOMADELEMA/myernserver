const authService = require('../services/auth.service');
const bcrypt = require('bcrypt');

exports.registrarUsuario = (req, res, next)=>{
    bcrypt.hash(req.body.contrasena, 10).then((hash)=>{
        const data={
            id_usuario: req.body.id_usuario, 
            nombre: req.body.nombre,
            apellido: req.body.apellido, 
            contrasena: hash,
        };

        authService.registrarUsuario(data, (error, results)=>{
            if(error){
                console.log(error);
                return res.status(400).send({success: 0, data: "Bad Request"});
            }
            return res.status(200).send({
                success: 1, 
                data: results,
            });
        });
    }).catch((error)=>{
        console.log(error);
        return res.status(400).send({success: 0, data: "Bad Request", mensaje: error});
    });
}