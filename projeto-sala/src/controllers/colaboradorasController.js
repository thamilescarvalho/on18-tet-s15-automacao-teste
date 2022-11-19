const ColaboradorasModels = require("../models/colaboradorasModels")
const bcrypt = require('bcrypt')
const SALT = 10

const all = async(req, res) => {
  try {
    const allColaboradoras = await ColaboradorasModels.find()
    res.status(200).json({
      statusCode: 200,
      message: 'Colaboradoras carregadas com sucesso!',
      colaboradoras: allColaboradoras
    })
  } catch (error) {
    res.status(500).json({ 
      statusCode: 500,
      message: error.message 
    })
  }
}

const findOne = async (req, res) => {
  const id = req.params.id
  try {
    const findColaboradora = await ColaboradorasModels.findById(id)

    if (!findColaboradora) return res.status(404).json({
      statusCode: 404,
      message: `Colaboradora ${id} not found`
    })
    res.status(200).json(findColaboradora)
  } catch (error) {
    res.status(500).json({ 
      statusCode: 500,
      message: error.message 
    })
  }
} 

const create = async(req, res) => {
   const { email, password, preferenceName } = req.body
   
   if (!email) {
    return res.status(400).json({ 
      statusCode: 400,
      message: `email é obrigátório`
     })
   }

   if (!password) {
    res.status(400).json({
      statusCode: 400,
      message: `password é obrigatório`
    })
   }

   try {
    const newColaboradora = new ColaboradorasModels({ email, password, preferenceName})

    newColaboradora.password = bcrypt.hashSync(password, SALT)

    const savedColaboradora = await newColaboradora.save()

    return res.status(201).json({
      statusCode: 201,
      message: `Colaboradora criada com sucesso`,
      colaboradora: savedColaboradora
    })
   } catch (error) {
     res.status(500).json({
      statusCode: 500,
      message: error.message
    })
   }
}

const update = async(req, res) =>  {
  const { email, password, preferenceName } = req.body
  const id = req.params.id
  try {
    const findColaboradora = await ColaboradorasModels.findById(id)

    if (!findColaboradora) return res.status(404).json({
      statusCode: 404,
      message: `Colaboradora ${id} not found`
    })

    findColaboradora.password = password && bcrypt.hashSync(password, SALT) || findColaboradora.password
    findColaboradora.email = email || findColaboradora.email
    findColaboradora.preferenceName = preferenceName || findColaboradora.preferenceName

    const updatedColaboradora = await findColaboradora.save()

    return res.status(200).json({
      statusCode: 200,
      message: `Colaboradora atualizada com sucesso`,
      colaboradora: updatedColaboradora
    })

   } catch (error) {
     res.status(500).json({
      statusCode: 500,
      message: error.message
    })
   }
}

const remove = async(req, res) => {
  const { id } = req.params

  try {
    const findColaboradora = await ColaboradorasModels.findById(id)

    if (!findColaboradora) return res.status(404).json({
      statusCode: 404,
      message: `Colaboradora ${id} not found`
    })

     await findColaboradora.delete()

    return res.status(200).json({
      statusCode: 200,
      message: `Colaboradora deletada com sucesso`
    })

   } catch (error) {
     res.status(500).json({
      statusCode: 500,
      message: error.message
    })
   }
}

module.exports = { all, findOne, create, update, remove }