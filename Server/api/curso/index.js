//serviços rest
const Cursos = require('./cursos');
Cursos.methods(['get', 'post', 'put', 'delete']);
Cursos.updateOptions({
    new: true,
    runValidators: true
});
module.exports = Cursos;