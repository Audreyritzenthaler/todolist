const express = require('express')
const routes = require('./routes/index')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/register', routes.register)
app.use('/authentification', routes.authentification)

app.get('/', (req, res) => {
  return res.status(200)
})


app.listen(process.env.PORT, error => {
  if (error) {
    console.log('Something bad happened...', error)
  } else {
    console.log(`Server is listening on port ${process.env.PORT}`)
  }
})
