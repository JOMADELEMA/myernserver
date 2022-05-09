const  postsService = require('../services/posts.service');

exports.listarPosts = (req, res, next)=>{
    const data={};

    postsService.listarPosts(data, (error, results)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success: 0, data: "Bad Request"});
        }
        return res.status(200).send({
            success: 1, 
            data: results,
        });
    });
};