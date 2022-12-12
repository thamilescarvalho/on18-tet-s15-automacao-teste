// const jwt = require('jsonwebtoken');

// const SECRET = process.env.SECRET;

// exports.checkAuth = (req, res, next) => {
//     const authHeader = req.get('authorization');
//     if (!authHeader) {
//         return res.status(401).send({
//             message: 'Desculpe! Você não está autorizada',
//             statusCode: 401
//         })
//     }
    
//     const token = authHeader.split(' ')[1];
//     console.log("token", token)

//     if (!token) {
//         return res.status(401).send({
//             message: "Problema no token"
//         })
//     }

//     try {
//         jwt.verify(token, SECRET, (error) => {
//             if(error) {
//                 return res.status(401).send({
//                     message: "Não autorizada"
//             })
//         }
//         next();
//         })
//     } catch(error) {
//         console.error(error)
//     }
// }