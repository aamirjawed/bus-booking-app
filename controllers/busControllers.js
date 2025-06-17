const db = require('../utils/db-connection')
const {User, Bus} = require('../models/busModel');




const addUsers = async (req, res) => {
    try {
        const {name, email} = req.body;

        if(!name || !email){
            res.status(400).josn({message:"All fields are required"})
        }

        const user = await User.create({
            name:name,
            email:email
        })

        res.status(200).json({message:`User with name ${name} has been added`})
    } catch (error) {
        res.status(500).json({message:"Unable to create user, something went wrong!"})
    }
}

const getUsers = async (req,res) => {
   try {
     const allUsers = await User.findAll()

     res.status(200).send(allUsers)
   } catch (error) {
        res.status(500).send("Unable to fetch all users details")
   }
}

const addBus = async (req,res) => {
    try{
        const{bus_no, available_seats} = req.body;

        if(!bus_no || !available_seats){
           return res.status(400).json({message:"All fields are required"})
        }

        const bus = await Bus.create({
            bus_no:bus_no,
            available_seats:available_seats
        })

        res.status(200).json({message:`Bus with bus no ${bus_no} has been added`})
    }catch(err){
        res.status(500).json({message:"Unable to add bus"})
    }
}

const availableSeats = async (req, res) => {
    try {
        const {seats} = req.params;

        const seatCount  = parseInt(seats, 10)

        const availableBus = await Bus.findAll({
            where:{
                available_seats: seatCount
            }
        })
            const length = availableBus.length

            if(length === 0){
                return res.status(404).json({message:"No bus available!"})
            }
        

        

        res.status(200).json({message:`${length} bus is available`})
    } catch (error) {
        res.status(500).json({message:"Something went wrong!"})
    }
}

module.exports = {addUsers, getUsers, addBus, availableSeats}