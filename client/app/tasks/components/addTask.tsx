'use client'
import React, { useState } from 'react'
import { Task, ProjectType } from '../interfaces/task'
import AddTaskForm from './addTaskForm'

export default function AddTask({ addTask }: { addTask: Function }) {

  const [isAddingTask, setIsAddingTask] = useState(false)

  const startAddingTask = () => {
    setIsAddingTask(true)
  }
  const addTaskEvent = (name: string, date: string) => {
    addTask({
      name,
      date,
      project: ProjectType.School
    });
    setIsAddingTask(false)
  }

  if (!isAddingTask) {
    return (
      <div className='text-xs pl-2 hover:text-slate-600 hover:cursor-pointer transition-colors' onClick={startAddingTask}>New Task</div>
    )
  } else {
    return (
    <AddTaskForm addTask={addTaskEvent}></AddTaskForm>
    )
  }
}