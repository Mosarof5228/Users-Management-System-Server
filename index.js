const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

const users = [
    {id:1,name:'mosarof',email:"mosarofhossen5228@gamil.com"},
    {id:2,name:'Lima',email:"lima202@gamil.com"},
    {id:3,name:'Tanha',email:"Tanha@gamil.com"},
    {id:4,name:'ATa',email:"ata@gamil.com"}
]

app.get('/', (req, res) => {
    res.send("Users Management surver is running")
})
app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log("responce is hitting");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})



app.listen(port, () => {
    console.log(`users-Management-System Server is Running on port ${port}`)
})