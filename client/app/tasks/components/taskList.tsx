'use client'
import React, { useEffect, useState } from 'react'
import { Task } from '../interfaces/task'
import TaskItem from './taskItem'
import AddTask from './addTask'
export default function TaskList({project, initialTasks}:{project:string,initialTasks:Task[]}) {
    const [tasks, setTasks] = useState<Task[]>([])

    function addTask(task:Task) {
        setTasks(tasks.concat(task));
        console.log(tasks)
    }

    useEffect(()=>{
        setTasks(initialTasks)
    },[initialTasks])

    return (
        <div className='max-w-44'>
            <h2 className='font-bold pb-2 text-lg'>{project}</h2>
            {tasks.map(task => <TaskItem task={task} key={task.name}></TaskItem>)}
            <AddTask addTask={addTask}></AddTask>
        </div>
    )
}

