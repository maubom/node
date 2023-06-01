const Sequelize = require( "sequelize");
const db = require( "../db.js");

const Setor =  db.define("setores", {
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
});

// criar tabela
//Setor.sync();
//Apaga e cria novamente
//Setor.sync({force: true});


module.exports = Setor;
