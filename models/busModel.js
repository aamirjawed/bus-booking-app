const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require('../utils/db-connection.js')



const User = sequelize.define('bususer',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

const Bus = sequelize.define('busesdata', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    
    bus_no:{
        type:DataTypes.STRING,
        allowNull:false
    },

    available_seats:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})


module.exports = {User, Bus}