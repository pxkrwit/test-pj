var express = require('express')
var router = express.Router()
const controller = require('../controllers/declared-plan-controller')

router.get('/:studentId/declared-plan', controller.getById)
router.post('/:studentId/declared-plan', controller.create)

module.exports = router