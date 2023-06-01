const express = require( "express");
const funcionarios = require("./src/controllers/funcionario.js");
const setores = require("./src/controllers/setor.js");

const routes = express.Router();

routes.get("/funcionarios", funcionarios.findAllFuncionario)
routes.post("/funcionarios", funcionarios.addFuncionario);
routes.get("/funcionarios/:id", funcionarios.findFuncionario);
routes.put("/funcionarios/:id", funcionarios.updateFuncionario);
routes.delete("/funcionarios/:id", funcionarios.deleteFuncionario);

routes.get("/setores", setores.findAllSetor);
routes.post("/setores", setores.addSetor);
routes.get("/setores/:id", setores.findSetor);
routes.put("/setores/:id", setores.updateSetor);
routes.delete("/setores/:id", setores.deleteSetor);

module.exports = routes;
