//serviços rest
const curso = require('./model');
curso.methods(['get', 'post', 'put', 'delete']);
curso.updateOptions({
    new: true,
    runValidators: true
});
module.exports = curso;


//rafael@verzel.com.br