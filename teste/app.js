const express =  require('express');
const app = express();

//const db = require('./models/db');
const Usuario = require('./models/Usuario');
const Situacao = require('./models/Situacao');


app.get('/listar-usuarios', async (req,res)=> {
    await Usuario.findAll({
        order: [['id', 'DESC']],
        include: [{
            attributes: ['nome_situacao'],
            model: Situacao
        }]
    })
    .then((usuarios) => {
        return res.json({
            erro: false,
            usuarios: usuarios
        });
    })
    .catch(()=>{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhum usuário encontrado!!"
        });
    })
    
});

app.listen(8080, () => { console.log("Servidor iniciado na porta 8080: http://localhost:8080")});
