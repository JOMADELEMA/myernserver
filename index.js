const express = require("express");
const { response } = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const postsRoutes = require("./routes/posts.route");
app.use("/posts", postsRoutes);

const usuariosRoutes = require("./routes/users.route");
app.use("/usuarios", usuariosRoutes);

const authRoutes = require("./routes/auth.route");
app.use("/auth", authRoutes);

const etiquetasRoutes = require("./routes/etiquetas.route");
app.use("/etiquetas", etiquetasRoutes);

app.listen(3100, () => {
  console.log("Escuchando....");
});
