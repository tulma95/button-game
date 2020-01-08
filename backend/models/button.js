const mongoose = require('mongoose')

const buttonSchema = mongoose.Schema({
  clicks: {
    type: Number,
  }
})

buttonSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = document._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Button = mongoose.model('Button', buttonSchema)

module.exports = Button