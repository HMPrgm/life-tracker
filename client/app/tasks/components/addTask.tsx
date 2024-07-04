'use client'
import React from 'react'
import { Task, tasks, ProjectType } from '../interfaces/task'

export default function AddTask() {

    const addTask = () => {
        tasks.push({
            name:"New Task",
            date:"Today",
            project:ProjectType.School
        })
    }

  return (
    <div className='text-xs pl-2 hover:text-slate-600 hover:cursor-pointer transition-colors' onClick={addTask}>New Task</div>
  )
}
