//serviços rest
const contato = require('./model'); //seteando formato da DB no mongo e linkando com o node-restful
contato.methods(['get', 'post', 'put', 'delete']); //usa o node-restfulç para dizer quais formas da API estao habilitadas
contato.updateOptions({   //mais configurtacoes de permissao
    new: true,  //permite criar
    runValidators: true  // verifica com o modeel
});
module.exports = contato;



//rafael@verzel.com.br