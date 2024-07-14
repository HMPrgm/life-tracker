'use client'
import { Task } from '@/app/tasks/interfaces/task'
import React, { useState } from 'react'

export default function EventDisplay({ event }: { event: Task | null }) {

  // if (!event) {
  //   return (
  //     <div className='p-10 bg-gray-300 relative'></div>
  //   )
  // }
  return (
    <div className='p-10 bg-gray-300 w-64'>
      <h3 className='text-lg font-bold pb-3'>Event</h3>
      <div contentEditable={true} className='border-b-2 border-black focus:outline-none'>{!event ? '' : event?.name}</div>
    </div>
  )
}
