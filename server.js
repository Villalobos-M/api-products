const express = require("express");
const productos = require("./modulos/productos");

const app = express();

//configuro middlew
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", productos);

app.use(express.static("./public"));

//----levanto servidor
app.listen(8080, () => console.log("express running"));
