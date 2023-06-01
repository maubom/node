const Sequelize = require('sequelize');
const db = require('./db');

const Situacao = require('./Situacao');

const Usuario = db.define('usuarios', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    situacaoId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Usuario.belongsTo(Situacao, {foreignKey: 'situacaoId', allowNull: false});

// criar tabela
//Usuario.sync();
//Apaga e cria novamente
//Usuario.sync({force: true});

module.exports = Usuario;
