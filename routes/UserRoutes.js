// router
const express = require('express')
const user = require('../models/userModel')
const router = express.Router()

router.post('/', (req, res) => {
  const User = user(req.body)
  User.save()
  res.send(req.body)
})

module.exports = router
