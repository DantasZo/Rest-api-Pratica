const express = require('express');
const { routes } = require('../app');
const router = express.Router();

/*Função: Listar todos os endereços de acordo com o usuário especificado via
url: id_usuario */

router.get('/', (req, res, next) => {
    res.status(200).json({
        codigo: "200",
        status: "Sucesso",
        mensagem: "Todos endereços do usuario foram localizados com sucesso"
    });
});

// Função: Listar endereço especificado via url: id_endereco_usuario

router.get('/:id_endereco_usuario', (req, res, next) => {
    res.status(200).json({
        codigo: "200",
        status: "Sucesso",
        mensagem: "Endereço encontrado com sucesso"
    });


});

//post pra cadastrar um novo endereço  
router.post('/', (req, res, next) => {
    res.status(201).json({
        codigo: "200",
        status: "Sucesso",
        mensagem: "Novo endeço de usuario cadastrado com sucesso!"
    })
});

//Deleta o endereço do usuario
router.delete('/:id_usuario', (req, res, next) => {
    res.status(201).json({
        codigo: "200",
        status: "Sucesso",
        mensagem: "Endereço do usuario deletado com sucesso!"
    })
});

//patch pra atualizar o endereço do usuario
router.patch('/:id_endereco_usuario', (req, res, next) => {
    res.status(201).json({
        codigo: "200",
        status: "Sucesso",
        mensagem: "Endereço atualizado com sucesso!"
    })
});


module.exports = router;