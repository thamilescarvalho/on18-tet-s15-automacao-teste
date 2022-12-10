const mongoose = require('mongoose');

const cozinhaSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Schema.Types.ObjectId
    },
    nome: {
        type: String, 
        required: true
    },
    cnpj: {
        type: Number, 
        required: true,
        unique: true
    },
    iniciativa_privada: { // boolean (sim ou não)
        type: Boolean
    },
    endereco: {
        type: String,
        require: true
    },
    bairros_que_atuam : [{
        type: String,
        require: true
    }],
    site: {
        type: String
    },
    atividades_disponiveis: [ ],
    pessoa_responsavel: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("cozinha", cozinhaSchema)
