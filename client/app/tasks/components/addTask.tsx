'use client'
import React from 'react'
import { Task, ProjectType } from '../interfaces/task'

export default function AddTask({ addTask }: { addTask: Function }) {

  const addTaskHelper = () => {
    addTask({
      name: "New Task",
      date: "Today",
      project: ProjectType.School
    });
  }

  return (
    <div className='text-xs pl-2 hover:text-slate-600 hover:cursor-pointer transition-colors' onClick={addTaskHelper}>New Task</div>
  )
}
