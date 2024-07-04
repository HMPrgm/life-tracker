import React from 'react'
import { Task, ProjectType } from '../interfaces/task'
import TaskItem from './taskItem'
export default function TaskList() {
    const name:string = "School"
    const tasks:Task[] = [
        {
            name:"Math Homework",
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
    ]
    return (
        <div>
            <h2 className='font-bold pb-2 text-lg'>{name}</h2>
            {tasks.map(task => <TaskItem task={task}></TaskItem>)}
        </div>
    )
}
