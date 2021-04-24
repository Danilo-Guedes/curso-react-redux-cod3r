const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/mymoney', {useMongoClient: true });


// UMA FORMA DE FZ A ALTERACAO DA MSG PADRAO DE ERRO QDO O CAMPO FOR REQUIRED ou no proprio Model
mongoose.Error.messages.general.required = "O Atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE} informado é menor que o limite '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE} informado é maior que o limite '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE} não é valido para o atributo '{PATH}'."
