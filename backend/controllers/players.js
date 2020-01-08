const playersRouter = require('express').Router()
const Player = require('../models/player')

playersRouter.get('/', async (req, res) => {
  try {
    const players = await Player.find({})
    res.status(200).json(players.map(player => player.toJSON()))
  } catch (error) {
    console.log(error);
  }
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
    console.log(error);
    res.end()
  }
})





module.exports = playersRouter