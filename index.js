const express = require('express');
const {response } = require('express');


var cors = require("cors");
const app = express();

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const postsRoutes = require('./routes/posts.route');
app.use('/posts', postsRoutes);


const usuariosRoutes = require('./routes/users.route');
app.use('/usuarios', usuariosRoutes);

const authRoutes = require('./routes/auth.route');
app.use('/auth', authRoutes);


app.listen(3100, ()=> {
    console.log("Escuchando....");
});