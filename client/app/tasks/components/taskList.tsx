'use client'
import React, { useState } from 'react'
import { Task, ProjectType } from '../interfaces/task'
import TaskItem from './taskItem'
import AddTask from './addTask'
export default function TaskList() {
    const name:string = "School"
    const [tasks, setTasks] = useState([
        {
            name:"Math Homework and 3.1,3.2,3.4",
            date:"Today",
            project:ProjectType.School
        },
        {
            name:"Science Project",
            date:"Today",
            project:ProjectType.School
        },
        {
            name:"History Essay",
            date:"Tomorrow",
            project:ProjectType.School
        }
    ])

    function addTask(task:Task) {
        setTasks(tasks.concat(task));
        console.log(tasks)
    }

    return (
        <div className='max-w-44'>
            <h2 className='font-bold pb-2 text-lg'>{name}</h2>
            {tasks.map(task => <TaskItem task={task} key={task.name}></TaskItem>)}
            <AddTask addTask={addTask}></AddTask>
        </div>
    )
}

