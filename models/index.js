const User = require('./busModel')
const Booking = require('./bookingModel')


// one to many

User.hasMany(Booking)
Booking.belongsTo(User)


module.exports = {User, Booking}