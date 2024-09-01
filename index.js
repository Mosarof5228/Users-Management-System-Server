const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())

app.get('/', (req, res) => {
    res.send("Users Management surver is running")
})



app.listen(port, () => {
    console.log(`users-Management-System Server is Running on port ${port}`)
})