import React, { useState } from 'react'

export default function AddTaskForm({addTask, cancel}:{addTask:Function, cancel:Function}) {

    const [formData, setFormData] = useState({ name: '', date: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id,value} = e.target;
        setFormData({ ...formData, [id]: value });
    }

    const handleSubmit = () => {
        if (formData.name && formData.date)
            addTask(formData.name,formData.date);
    }

    const handleCancel = () => {
        cancel();
    }

  return (
    <form className="border-2 border-slate-600 rounded p-2 my-2 flex flex-col gap-1">
        <input type="text"  placeholder='Name' id="name" onChange={handleChange}/>
        <input type="text" placeholder='date' id="date" className='text-xs' onChange={handleChange}/>
        <div className='flex justify-evenly gap-1 [&>button]:px-2'>
            <button type="button" className='text-xs text-white bg-black rounded py-1' onClick={handleSubmit}>Add Task</button>
            <button type="button" className='text-xs text-white bg-black rounded py-1' onClick={handleCancel}>Cancel</button>
        </div>
    </form>
  )
}