const express = require('express');
const router = express.Router();
const Task = require('../models/task')


router.get("/", async (req,res)=>{
    const tasks = await Task.find({});
    res.json(tasks);
})

router.post("/", async (req,res)=>{
  const {task} = req.body;
  const newTask = await new Task(task).save();
  res.json({task:newTask})
})

// app.patch("/", async (req,res)=>{
//   const {task} = req.body;
//   const newTask = await Task.findByIdAndUpdate(task._id,task)
//   res.json({task:newTask})
// })

router.delete("/:id", async (req,res)=>{
  try {
    const {id} = req.params;
  const removedTask = await Task.findByIdAndDelete(id)
  res.json(removedTask)
} catch {
  res.json({status:200,message:"no task found :("})
}
})

module.exports = router