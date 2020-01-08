const app = require('express')()
const playersRouter = require('./controllers/players')
const buttonRouter = require('./controllers/button')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
}).catch(error => console.log(error))

mongoose.set('useCreateIndex', true)


app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use('/api/players', playersRouter)
app.use('/api/button', buttonRouter)


module.exports = app