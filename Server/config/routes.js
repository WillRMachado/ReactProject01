const express = require('express');
const curso = require ('../api/curso')
const contatos = require ('../api/contato')


module.exports = function (server) {
    //definir a URL base para todas as rotas
    const router = express.Router();
    server.use('/api', router);
    //rotas relacionadas às operações com curso e contatos
    // const curso = require('../ws/curso/cursoService');
    // const Contatos = require('../ws/contatos/contatosService');
    curso.register(router, '/curso');
    contatos.register(router, '/contato');

    // Contatos.register(router, '/contatos');
};