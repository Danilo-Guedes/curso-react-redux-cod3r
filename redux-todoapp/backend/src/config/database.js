const mongoose = require('mongoose')
mongoose.Promise = global.Promise //API de Promisse do Mongoose está deprecated

module.exports = mongoose.connect('mongodb://localhost/todo')
