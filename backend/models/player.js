const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const playerSchema = mongoose.Schema({
  playername: {
    type: String,
    unique: true
  },
  points: {
    type: Number
  }
})

playerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = document._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

playerSchema.plugin(uniqueValidator)

const Player = mongoose.model('Player', playerSchema)

module.exports = Player