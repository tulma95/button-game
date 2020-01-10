const playersRouter = require('express').Router()
const Player = require('../models/player')

playersRouter.put('/reset', async (req, res) => {
  const player = req.body
  const newPlayerData = { ...player, points: 20 }

  const updatedPlayer = await Player.findByIdAndUpdate(player.id, newPlayerData, {
    new: true
  })

  res.status(200).json(updatedPlayer)
})

playersRouter.post('/', async (req, res) => {
  const { playername } = req.body
  const player = new Player({
    playername,
    points: 20
  })
  try {
    const playerInDb = await Player.findOne({
      playername
    })

    if (playerInDb) {
      res.status(200).json(playerInDb.toJSON())
    } else {
      const newPlayer = await player.save()
      res.status(201).json(newPlayer.toJSON())
    }

  } catch (error) {
    console.log(error)
    res.end()
  }
})





module.exports = playersRouter