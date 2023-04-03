const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

// db connecting
require('./dbConnection')

// api
app.use('/apiData', require('./routes/UserRoutes'))

app.get('/', (req, res) => {
  res.send('Node App Running on Vercel')
})

app.listen(9001, console.log(`Backend server is running at Port`))
