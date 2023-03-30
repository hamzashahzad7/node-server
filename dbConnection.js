const mongoose = require('mongoose')
DB_URL = "mongodb+srv://hamzamughal:Clientpro1@cluster0.vf1dyip.mongodb.net/MyCompanyForm?retryWrites=true&w=majority"
const mongodb = DB_URL
mongoose.connect(mongodb)

const mongodbConnection = mongoose.connection

mongodbConnection.on('error', (err) => {
  console.log(err)
})

mongodbConnection.once('connected', () => {
  console.log('Db Connected Successfully')
})