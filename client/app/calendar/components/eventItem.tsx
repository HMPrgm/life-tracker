import React from 'react'
import { Task } from '../../tasks/interfaces/task'

export default function EventItem({event}:{event:Task}) {
  return (
    <div className='bg-gray-300 my-1 p-1 rounded'>{event.name}</div>
  )
}
