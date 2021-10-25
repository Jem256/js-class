const router = require('express').Router()
const infoController = require('../controllers/person.controller')

router.get('/info', infoController)
module.exports = router;