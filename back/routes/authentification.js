const express = require('express')
const { checkMail, checkUser, createToken } = require('../service/auth.service')
const router = express.Router()

router.post('/', checkMail, checkUser, createToken)

module.exports = router