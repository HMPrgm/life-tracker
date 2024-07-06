const express = require('express');
const app = express();

const cors = require('cors')


const mongoose = require('mongoose');
const Task = require('./models/task')
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/taskApp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(cors())
app.use(express.json())

app.get("/tasks", async (req,res)=>{
    const tasks = await Task.find({})
    console.log(tasks)
    res.json(tasks)
})

const PORT = 5000
app.listen(PORT,()=> {
    console.log(`Listening on port ${PORT}`)
})