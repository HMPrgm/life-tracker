import React from 'react'
import { Task, ProjectType, tasks } from '../interfaces/task'
import TaskItem from './taskItem'
import AddTask from './addTask'
export default function TaskList() {
    const name:string = "School"
    
    return (
        <div>
            <h2 className='font-bold pb-2 text-lg'>{name}</h2>
            {tasks.map(task => <TaskItem task={task} key={task.name}></TaskItem>)}
            <AddTask></AddTask>
        </div>
    )
}
