const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require('../utils/db-connection.js')


const Booking = sequelize.define('booking', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    bus_id:{
        type:DataTypes.INTEGER
    },
    seat_no:{
        type:DataTypes.INTEGER
    }
})

module.exports = Booking