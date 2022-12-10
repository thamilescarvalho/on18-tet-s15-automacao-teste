const UserSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const login = (req, res) => {
    try{
        UserSchema.findOne({ email: req.body.email }, (error, user) => {
            console.log("Usuário encontrado:", user)
            if (!user) {
                return res.status(404).send({
                    message: 'Usuária não encontrada'
                });
            }

            const validPassword = bcrypt.compareSync(req.body.password, user.password)
            console.log("Verifique sua senha", validPassword)

            if(!validPassword){
                return res.status(401).send({
                message: "senha inválida",
                statusCode: 401
                })
            }

            const token = jwt.sign({name: user.name}, SECRET);
            console.log("Token correto:", token)

            res.status(200).send({
                message: "Login feito com sucesso!",
                token})
            })
         
        } catch(error) {
            res.status(500).send({
                message: err.message
            })
            console.error(error)
        }
    }
    module.exports = {
        login
    };
