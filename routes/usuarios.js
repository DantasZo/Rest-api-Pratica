const express = require('express');
const { routes } = require('../app');
const { connect } = require('./enderecos');
const router = express.Router();

//Get pra consultar todos usuarios
router.get('/', (req, res, next) => {
    res.status(200).json({
        codigo: "200",
        status: "Sucesso",
        mensagem: "Ação realizada com sucesso"
    });
});

//get por id de usuario
router.get('/:id_usuario', (req, res, next) => {
    res.status(200).json({
        codigo: "200",
        status: "Sucesso",
        mensagem: "Usuario encontrado com sucesso"
    });


});

//post pra cadastrar o usuario
router.post('/', (req, res, next) => {
    
const usuario = {
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    email: req.body.email,
    telefone: req.body.telefone,
    cpf: req.body.cpf,
};
res.status(201).send({
    mensagem: 'cadastre um usuario!',
    usuarioCriado: usuario
})
});

//Deleta o usuario
router.delete('/:id_usuario', (req, res, next) => {
    res.status(201).json({
        codigo: "200",
        status: "Sucesso",
        mensagem: "Usuario deletado com sucesso!"
    })
});

//patch pra atualizar os dados do usuario
router.patch('/:id_usuario', (req, res, next) => {
    res.status(201).json({
        codigo: "200",
        status: "Sucesso",
        mensagem: "Dados do usuario atualizados com sucesso!"
    })
});


module.exports = router;