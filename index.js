const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Const para armanezar a porta do servidor
const path = require("path");
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

const receitas = [
    {
        id: 1,
        nome: "Cuscuz",
        ingredientes:"Fuba",
        preparo: "cuscuzeira",
        imagem: "./image/cuscuz-de-milho-1614715966465_v2_450x450.jpg"
    }
];

let mensagem = "";

// let receita = undefined;

// Substituição de function por arrow function
app.get("/", (req, res) => {
  res.render("index", {receitas:receitas, mensagem});
});

app.get("/cadastro", (req, res) =>{
    res.render("cadastro", {receitas, mensagem});
});

app.post("/add", (req, res) =>{
    let receita = req.body;
    receita.id = receitas.length +1;
    receitas.push(receita);
    mensagem = "Cadastrado com sucesso!"
    setTimeout(() =>{
        mensagem = ""
    }, 5000);
    res.redirect("/");
});

app.get("/contatos", (req, res) =>{
    res.render("contatos");
});

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
