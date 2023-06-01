const  FuncionarioRepository = require( "../models/funcionarioModel.js");
const setores = require("../models/setorModel.js")

const  findAllFuncionario = async (req, res)=> {
  FuncionarioRepository.findAll({include: setores}).then((result) => res.json(result));
}

const findFuncionario = async (req, res)=> {
  FuncionarioRepository.findByPk(req.params.id, {include: setores}).then((result) => res.json(result));
}

const  addFuncionario = async (req, res)=> {
  FuncionarioRepository.create({
    nome: req.body.nome,
    setor_id: req.body.setor,
  }).then((result) => res.json(result));
}

const updateFuncionario = async (req, res)=> {
  await FuncionarioRepository.update(
    {
      nome: req.body.nome,      
      setor_id: req.body.setor,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  FuncionarioRepository.findByPk(req.params.id).then((result) => res.json(result));
}

const deleteFuncionario = async (req, res)=> {
  await FuncionarioRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  FuncionarioRepository.findAll().then((result) => res.json(result));
}

module.exports = {findAllFuncionario, deleteFuncionario, updateFuncionario, addFuncionario, findFuncionario };