'use client'
import { Task } from '@/app/tasks/interfaces/task'
import React, { useState } from 'react'

export default function EventDisplay({ currentEvent }: { currentEvent: Task | null }) {

  

  return (
    <div className='p-10 bg-gray-300 w-64'>
      <h3 className='text-lg font-bold pb-3'>Event</h3>
      <input type='text' className='border-b-2 border-black focus:outline-none' id='name' value={!currentEvent ? '' : currentEvent?.name}></input>
    </div>
  )
}

export function getCurrentTask() {
  
}
