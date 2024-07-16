'use client'
import React, { useEffect, useState } from 'react'
import TaskList from './components/taskList'
import { Task, tasksToMap } from './interfaces/task'
const api = require('../_utils/api')
export default function Page() {

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [tasks, setTasks] = useState<Map<string,Task[]>>()


  const getTasks = async () => {
    setTasks(tasksToMap(await api.getTasks()));
    setIsLoading(false);
  }



  useEffect(()=>{
    getTasks();
  },[])

  if (isLoading || tasks === undefined) {
    return(<main className='p-6'>Loading</main>)
  }
  return (
    <main className='p-6 flex gap-10'>
      {Array.from( (tasks).entries()).map(kvArr=><TaskList key={kvArr[0]} initTasks={kvArr[1]} project={kvArr[0]} refresh={getTasks}></TaskList>)}
    </main>
  )
}
