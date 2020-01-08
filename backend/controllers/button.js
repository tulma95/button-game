const buttonRouter = require('express').Router()
const Button = require('../models/button')

buttonRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  return res.send('moi')
})

buttonRouter.get('/', async (req, res) => {
  const button = await Button.findOne({})
  return res.json(button.toJSON())
})


module.exports = buttonRouter