const mongoose = require("mongoose");

const cozinhaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String, 
        required: true
    },
    cnpj: {
        type: Number, 
        required: true
    },
    iniciativa_privada: { // boolean (sim ou não)
        type: Boolean
    },
    endereco: {
        type: String,
        require: true
    },
    bairros_que_atuam : {
        type: String,
        require: true
    },
    site: {
        type: String
    },
    atividades_disponiveis: {
        type: String
    },
    pessoa_responsavel: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("cozinha", cozinhaSchema)
