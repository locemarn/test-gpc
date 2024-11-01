const express = require('express')
const models = require('../models/user')

const router = express.Router()

router.get('/', (req, res) => {
  const result = models.get()
  console.log('result', result)
  return res.status(200).json(result)
})

module.exports = router
