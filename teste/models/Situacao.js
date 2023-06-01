const Sequelize = require('sequelize');
const db = require('./db');

const Situacao = db.define('situacoes', {
    nome_situacao: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
// criar tabela
//Situacao.sync();

module.exports = Situacao;
