const buttonRouter = require('express').Router()
const Button = require('../models/button')
const Player = require('../models/player')

buttonRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  return res.send('moi')
})

buttonRouter.get('/', async (req, res) => {
  const button = await Button.findOne({})
  return res.json(button.toJSON())
})

buttonRouter.put('/', async (req, res) => {
  const { id } = req.body

  try {
    const playerInDb = await Player.findById({ _id: id })

    if (playerInDb.points < 0) {
      res.json({ error: 'not enough points' })
    }

    const button = (await Button.findOne({})).toJSON()
    const updatedButton = { ...button, clicks: button.clicks + 1 }

    const returnButton = await Button.findByIdAndUpdate(updatedButton.id, updatedButton, {
      new: true
    })

    const { clicks } = returnButton

    const pointsGained = calculatePoints(clicks)
    const newPlayerPoints = pointsGained + playerInDb.points - 1

    const newPlayer = {
      id,
      points: newPlayerPoints,
      playername: playerInDb.playername
    }

    await Player.findByIdAndUpdate(id, newPlayer)

    const clicksForNextPoints = 10 - (clicks % 10)
    console.log(clicks);
    return res.status(200).json({
      clicksForNextPoints,
      pointsGained
    })

  } catch (error) {
    return res.json(error)
  }
})

const calculatePoints = (clicks) => {
  if (clicks % 500 === 0) {
    return 250
  } else if (clicks % 100 === 0) {
    return 100
  } else if (clicks % 10 === 0) {
    return 5
  }
  return 0
}

module.exports = buttonRouter