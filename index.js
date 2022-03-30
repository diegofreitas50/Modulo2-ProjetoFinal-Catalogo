const express = require("express");
const app = express();
const port = 3000; // Const para armanezar a porta do servidor
const path = require("path");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Substituição de function por arrow function
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/index", (req, res) => {
    res.render("index"); // Nome do arquivo, o EJS já busca dentro da pasta views.
});

app.get("/cadastro", (req, res) =>{
    res.render("cadastro")
});

app.get("/contatos", (req, res) =>{
    res.render("contatos")
});

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
