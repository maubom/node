const Sequelize = require( "sequelize");
const db = require( "../db.js");

const Setor = require('./setorModel.js');

const Funcionario =  db.define("funcionarios", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  setor_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Funcionario.belongsTo(Setor, {foreignKey: 'setor_id', allowNull: false});

// criar tabela
//Funcionario.sync();
//Apaga e cria novamente
//Funcionario.sync({force: true});

module.exports = Funcionario;

