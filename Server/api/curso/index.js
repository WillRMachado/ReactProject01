//serviços rest
const curso = require('./model'); //seteando formato da DB no mongo e linkando com o node-restful
curso.methods(['get', 'post', 'put', 'delete']); //usa o node-restfulç para dizer quais formas da API estao habilitadas
curso.updateOptions({   //mais configurtacoes de permissao
    new: true,  //permite criar
    runValidators: true  // verifica com o modeel
});
module.exports = curso;



//rafael@verzel.com.br