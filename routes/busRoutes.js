const express  = require('express')
const { addUsers, getUsers, addBus, availableSeats, bookSeat } = require('../controllers/busControllers')
const router = express.Router()


router.post('/add-user', addUsers)
router.get('/get-users', getUsers)
router.post('/add-bus', addBus)
router.get('/available/:seats', availableSeats)

router.post('/booking', bookSeat)

module.exports = router