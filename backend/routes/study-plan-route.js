var express = require('express')
var router = express.Router()
const controller = require('../controllers/study-plan-controller')

router.get('/',controller.list)

module.exports = router