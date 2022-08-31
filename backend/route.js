const Router = require('express')
const router = new Router()
const controller = require('./control')


router.post('/note', controller.message)

module.exports = router