const express = require('express')
const db = require('./utils/db-connection')
const busRoutes = require('./routes/busRoutes')

const app  = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Bus Booking Application")
})

app.use('/bus', busRoutes)



db.sync({force:true}).then(() => {
    app.listen(3000, () => {
    console.log("Server is running on 3000")
})
}).catch((err) => {
    console.log(err)
});
