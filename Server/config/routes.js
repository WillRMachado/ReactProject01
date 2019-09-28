const express = require('express');
const curso = require ('../api/curso')
module.exports = function (server) {
    //definir a URL base para todas as rotas
    const router = express.Router();
    server.use('/ws', router);
    //rotas relacionadas às operações com cursos e contatos
    const Cursos = require('../ws/cursos/cursosService');
    const Contatos = require('../ws/contatos/contatosService');
    Cursos.register(router, '/curso');
    Contatos.register(router, '/contatos');
};