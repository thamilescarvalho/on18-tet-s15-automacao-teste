// const UserSchema = require('../models/userSchema');
// const bcrypt = require('bcrypt');

// const criarLogin = async (req, res) => {
//     const passHasheado = bcrypt.hashSync(req.body.password, 10)
//     req.body.password = passHasheado

//     const checaEmail = await UserSchema.exists({ email: req.body.email })

//     if (checaEmail) {
//         return res.status(409).send({
//             messag: 'Email já cadastrado',
//         })
//     }
//     try {
//         const novoUsuario = new UserSchema(req.body)

//         const salvaUsuario = await newUser.save()

//         res.status(201).send({
//             message: 'Usuário criado com sucesso! Seja bem-vinda!',
//             savedUser,
//           })
//     } catch (err) {
//         console.error(err)
//         res.status(500).send({
//           message: err.message,
//         })
//     }
// }
// module.exports = {
//     criarLogin
// }