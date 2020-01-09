const express = require('express')
const app = express()
const playersRouter = require('./controllers/players')
const buttonRouter = require('./controllers/button')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

app.use(cors())

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
}).catch(error => console.log(error))

mongoose.set('useCreateIndex', true)

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use('/', express.static('./frontend/build'))
app.use('/api/players', playersRouter)
app.use('/api/button', buttonRouter)


module.exports = app