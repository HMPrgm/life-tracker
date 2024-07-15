'use client'
import { Task } from '@/app/tasks/interfaces/task'
import React, { useState } from 'react'

export default function AddEventForm({ addEvent }: { addEvent: Function }) { //{ currentEvent }: { currentEvent: Task | null }

  const [formData, setFormData] = useState({ name: '', date: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }

  const handleSubmit = () => {
    if (formData.name && formData.date)
      addEvent({
        name: formData.name,
        date: formData.date,
        project: 'School'
      });
  }

  // const handleCancel = () => {
  //     cancel();
  // }

  return (
    <form onSubmit={handleSubmit} className='p-10 bg-gray-300 w-64 '>
      <h3>Event</h3>
      <input type="text" placeholder='Name' id="name" onChange={handleChange} />
      <input type="date" placeholder='date' id="date" className='text-xs' onChange={handleChange} />
      <div className='flex justify-evenly gap-1 [&>button]:px-2'>
        <button type="button" className='text-xs text-white bg-black rounded py-1' onClick={handleSubmit}>Add Task</button>
      </div>
    </form>
  )
}
// <form onSubmit={handleSubmit} className="border-2 border-slate-600 rounded p-2 my-2 flex flex-col gap-1">
//     <input type="text"  placeholder='Name' id="name" onChange={handleChange}/>
//     <input type="date"  placeholder='date' id="date" className='text-xs' onChange={handleChange}/>
//     <div className='flex justify-evenly gap-1 [&>button]:px-2'>
//         <button type="button" className='text-xs text-white bg-black rounded py-1' onClick={handleSubmit}>Add Task</button>
//         <button type="button" className='text-xs text-white bg-black rounded py-1' onClick={handleCancel}>Cancel</button>
//     </div>
// </form>