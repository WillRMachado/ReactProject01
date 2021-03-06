const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');
//middlewares - singletons: commons 


const port = 3200;


const server = express(); //novo servidor
//para toda requisição que chegar, use o bodyparser para
//interpretar chegadas no formato urlencoded
server.use(bodyParser.urlencoded({
    extended: true
}))
//considera o formato json no corpo da requisição
server.use(bodyParser.json());
server.use(allowCors)


const callback = function () {
    //template string (observe a crase)
    console.log(`servidor no ar, na porta ${port}`);
}

server.listen(port, callback)

module.exports = server