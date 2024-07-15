'use client'
import React, { useEffect, useState } from 'react'
import { Task } from '../interfaces/task'
import TaskItem from './taskItem'
import AddTask from './addTask/addTask'
export default function TaskList({project, initialTasks, addTask, removeTask}:{project:string,initialTasks:Task[], addTask:Function, removeTask:Function}) {
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(()=>{
        setTasks(initialTasks)
        console.log(initialTasks)
    },[initialTasks])

    return (
        <div className='max-w-44'>
            <h2 className='font-bold pb-2 text-lg'>{project}</h2>
            {tasks.map(task => <TaskItem task={task} key={task.name} removeTask={removeTask}></TaskItem>)}
            <AddTask addTask={addTask}></AddTask>
        </div>
    )
}

