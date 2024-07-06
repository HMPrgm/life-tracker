'use client'
import React, { useEffect, useState } from 'react'
import TaskList from './components/taskList'
import { getTasks } from '../_api/api'
import { Task } from './interfaces/task'

export default function Page() {

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(()=>{
    getTasksHelper();
  },[])

  const getTasksHelper = async () => {
    const tasks:Task[]|null = await getTasks();
    if (tasks) {
      setTasks(tasks)
    }
    setIsLoading(false)
    console.log(tasks)
  }
  if (isLoading) {
    return(
      <main className='p-6'>Loading</main>
    )
  }
  return (
    <main className='p-6 flex gap-10'>
      <TaskList initialTasks={tasks} project={'School'}></TaskList>
    </main>
  )
}
