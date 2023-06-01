const SetorRepository = require( "../models/setorModel.js");

const findAllSetor = (req, res)=> {
  SetorRepository.findAll({order: ['nome']}).then((result) => res.json(result));
}

const findSetor = (req, res)=> {
  SetorRepository.findByPk(req.params.id).then((result) => res.json(result));
}

const addSetor = (req, res)=> {
  SetorRepository.create({
    nome: req.body.nome
  }).then((result) => res.json(result));
}

const  updateSetor = async (req, res)=> {
  await SetorRepository.update(
    {
      nome: req.body.nome
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  SetorRepository.findByPk(req.params.id).then((result) => res.json(result));
}

const  deleteSetor = async (req, res)=> {
  await SetorRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  SetorRepository.findAll().then((result) => res.json(result));
}

module.exports =  {findAllSetor, deleteSetor, updateSetor, addSetor, findSetor };