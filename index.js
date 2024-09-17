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

// mosarofhossen5228
// 7fKyW91h6NLyGpPm


// mosarofhossen5228
// GhmJoFbFwfxGpgG6


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mosarofhossen5228:GhmJoFbFwfxGpgG6@cluster0.e4gyv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // const database = client.db("usersDB");
    // const userCollection = database.collection("users");
    const userCollection = client.db("usersDB").collection('users');


    app.get('/users', async(req, res) => {
      const cursor = userCollection.find();
      const result =await cursor.toArray();
      res.send(result);
  })

    app.post('/users', async(req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);//mongodb database a data insert hle sei datai hobe result;

    })

    app.delete('/users/:id', async(req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: new ObjectId(id) }
      const result = await userCollection.deleteOne(query)
      res.send(result);
    })


 

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("Users Management surver is running")
})

app.listen(port, () => {
    console.log(`users-Management-System Server is Running on port ${port}`)
})