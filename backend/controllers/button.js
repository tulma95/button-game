const buttonRouter = require('express').Router()
const Button = require('../models/button')
const Player = require('../models/player')


buttonRouter.get('/', async (req, res) => {
  const button = await Button.findOne({})
  return res.status(200).json(button.toJSON())
})

buttonRouter.put('/click/:id', async (req, res) => {
  try {

    const playerInDb = await Player.findById(req.body.id)
    if (playerInDb.points < 0) {
      res.json({ error: 'not enough points' })
    }

    const updatedButton = await Button.findByIdAndUpdate(req.params.id, { $inc: { clicks: 1 } }, {
      new: true,
      useFindAndModify: false
    })

    const pointsGained = calculatePoints(updatedButton.clicks)

    const updatedPlayerPoints = playerInDb.points + pointsGained + - 1

    const playerToSave = {
      id: playerInDb.id,
      points: updatedPlayerPoints,
      playername: playerInDb.playername
    }

    const savedPlayer = await Player.findByIdAndUpdate(playerToSave.id, playerToSave, {
      new: true,
      useFindAndModify: false
    })

    const clicksForNextPoints = 10 - (updatedButton.clicks % 10)
    const response = {
      clicksForNextPoints,
      pointsGained,
      currentPoints: savedPlayer.points
    }
    return res.status(200).json(response)

  } catch (error) {
    console.log(error);
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