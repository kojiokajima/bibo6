const express = require('express')
const router = express.Router()
const listController = require('../controllers/list')
const User = require('../models/User.model')

router.post('/update-company', listController.updateCompanyList)

router.delete('/delete', listController.deleteCompany)

router.post('/update-list', listController.updateList)

module.exports = router