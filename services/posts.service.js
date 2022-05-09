const db = require('../config/db.config');

exports.listarPosts = (Data, callback)=>{
    db.query(`
    SELECT * FROM myern.post
    `, [], 
    (error, results, fields)=>{
        if(error) {
            console.log(error.message);
            return callback(error);
        };
        return callback(null, results);
    });
};