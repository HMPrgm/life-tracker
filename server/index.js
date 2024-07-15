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

app.use(cors());
app.use(express.json());

app.get("/tasks", async (req,res)=>{
    const tasks = await Task.find({});
    res.json(tasks);
})

app.post("/tasks", async (req,res)=>{
  const {task} = req.body;
  const newTask = await new Task(task).save();
  res.json({task:newTask})
})

app.patch("/tasks", async (req,res)=>{
  const {task} = req.body;
  const newTask = await Task.findByIdAndUpdate(task._id,task)
  res.json({task:newTask})
})

app.delete("/tasks/:id", async (req,res)=>{
  const {id} = req.params;
  const removedTask = await Task.findByIdAndDelete(id)
  console.log(removedTask)
  res.json(removedTask)
})
const PORT = 5000
app.listen(PORT,()=> {
    console.log(`Listening on port ${PORT}`)
})