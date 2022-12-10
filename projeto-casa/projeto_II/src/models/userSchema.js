const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    nome: {
        type: String, 
        required: true
    },
    email: {
        type: Number, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: new Date()
        
    }
})

module.exports = mongoose.model("user", userSchema)
