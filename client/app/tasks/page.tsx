import React from 'react'
import TaskList from './components/taskList'

export default function Page() {
  return (
    <main className='p-6 flex gap-10'>
      <TaskList></TaskList>
      <TaskList></TaskList>
    </main>
  )
}
