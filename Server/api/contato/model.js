//criando o schema
const restful = require('node-restful');
const mongoose = restful.mongoose; //referência ao mongoose do restful

//definindo o schema curso
const contatoSchema = new mongoose.Schema({
    nome: {
        type: String,
    },
    descricao: {
        type: String,
    },
});



module.exports = restful.model('contato', contatoSchema);