const routes = require("express").Router();
// const Router = require("express");
// const { route } = require("express/lib/application");
const ReceitasController = require("../controllers/ReceitasController");

routes.get("/", ReceitasController.getAll);
routes.get("/cadastro", ReceitasController.cadastro);
routes.get("/contatos", ReceitasController.contatos);
routes.post("/add", ReceitasController.add);
routes.get('/getById/:id/:method', ReceitasController.getById);
routes.post('/update/:id', ReceitasController.update);
routes.get('/remove/:id', ReceitasController.remove);
module.exports = routes;
