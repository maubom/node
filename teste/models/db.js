const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'user', 'user', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(()=>{console.log('Conexao efetuada com sucesso!');})
.catch(()=>{console.log("Falha na conexao!"); 
})

module.exports = sequelize
