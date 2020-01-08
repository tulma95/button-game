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
  const { playername, points } = req.body

  const player = new Player({
    playername,
    points
  })
  try {
    const savedPlayer = await player.save()
    return res.status(201).json(savedPlayer.toJSON())
  } catch (error) {
    console.log(error);
    return res.end()
  }
})





module.exports = playersRouter