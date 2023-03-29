const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// dotenv configuration
const dotenv = require('dotenv')
dotenv.config()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

// db connecting
require('./dbConnection')


// api
app.use('/api/usersdata' , require('./routes/UserRoutes'))


const port = process.env.PORT || 9001
// const PORT = process.env.PORT || 8080
app.listen(port, console.log(`Backend server is running at Port ${port}`))
