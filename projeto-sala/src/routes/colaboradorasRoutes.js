const controller = require('../controllers/colaboradorasController')
const express = require('express')

const router = express.Router()

router.get('/all', controller.all)
router.get('/:id', controller.findOne)

router.post('/create', controller.create)
router.put('/update/:id', controller.update)
router.delete('/delete/:id', controller.remove)

module.exports = router