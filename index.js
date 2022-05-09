const express = require('express');
const {response } = require('express');


var cors = require("cors");
const app = express();

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const postsRoutes = require('./routes/posts.route');
app.use('/posts', postsRoutes);


app.listen(3100, ()=> {
    console.log("Escuchando....");
});