const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //para evitar warnings
mongoose.set('useUnifiedTopology', true)
module.exports = mongoose.connect('mongodb://localhost:27017/school', {useNewUrlParser: true});