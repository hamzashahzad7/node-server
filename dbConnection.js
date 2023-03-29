const mongoose = require('mongoose')
const mongodb = process.env.DB_URL
mongoose.connect(mongodb)

const mongodbConnection = mongoose.connection

mongodbConnection.on('error', (err) => {
  console.log(err)
})

mongodbConnection.once('connected', () => {
  console.log('Db Connected Successfully')
})