const express = require('express');
const app = express();

const cors = require('cors')


const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/taskApp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(cors())
app.use(express.json())

app.get("/tasks", (req,res)=>{
    
    res.json({
        start:Date.now(),
        end:Date.now() + 60*60*1000,
        name:"Work on Life Tracker",
        description:"work on Backend api with express and mongo"
    })
})

const PORT = 5000
app.listen(PORT,()=> {
    console.log(`Listening on port ${PORT}`)
})