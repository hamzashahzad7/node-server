const mongoose = require('mongoose')

const schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    number: { type: Number, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true },
)

const user = mongoose.model('USER', schema)
module.exports = user
