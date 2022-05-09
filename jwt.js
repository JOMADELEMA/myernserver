const {sign, verify} = require('jsonwebtoken');

const createTokens = (user) => {
    // console.log(user);
    const accessToken = sign(
        {id_usuario: user.id_usuario, nombre: user.name, apellido: user.apellido},
        "jwtSecretCodeCambiar",
        {}
    );
    return accessToken;
};

const validateToken = (req, res, next)=>{
    const accessToken = req.cookies['access-token']

    if(!accessToken) return res.status(400).send({error: "Usuario no autenticado por que no envía la cookie"});

    try {
        const validToken = verify(accessToken, "jwtSecretCodeCambiar");
        if(validToken){
            req.authenticated = true;
            return next();
        }
    }
    catch(error){
        return res.status(400).send({error: error});
    }
}

module.exports = {createTokens, validateToken};

