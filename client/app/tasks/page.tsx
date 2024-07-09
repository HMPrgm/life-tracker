'use client'
import React, { useEffect, useState } from 'react'
import TaskList from './components/taskList'
const api = require('../_utils/api')
import { Task } from './interfaces/task'

export default function Page() {

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [tasks, setTasks] = useState<Task[]>([])


  const getTasks = async () => {
    const tasks:Task[] = await api.getTasks();
    setTasks(tasks);
    setIsLoading(false);
  }

  const addTask = (task:Task) => {
    api.addTask(task);
  }



  useEffect(()=>{
    getTasks();
  },[])

  if (isLoading) {
    return(<main className='p-6'>Loading</main>)
  }
  return (
    <main className='p-6 flex gap-10'>
      <TaskList initialTasks={tasks} project={'School'} addTask={addTask}></TaskList>
    </main>
  )
}
