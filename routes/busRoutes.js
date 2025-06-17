const express  = require('express')
const { addUsers, getUsers, addBus, availableSeats } = require('../controllers/busControllers')
const router = express.Router()


router.post('/add-user', addUsers)
router.get('/get-users', getUsers)
router.post('/add-bus', addBus)
router.get('/available/:seats', availableSeats)

module.exports = router