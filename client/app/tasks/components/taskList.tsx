'use client'
import React, { useEffect, useState } from 'react'
import { Task } from '../interfaces/task'
const api = require('../../_utils/api')
import TaskItem from './taskItem'
import AddTask from './addTask/addTask'
export default function TaskList({ initTasks, project, refresh }: { initTasks: Task[], project: string, refresh: Function }) {
    const [tasks, setTasks] = useState<Task[]>([])

    const addTask = async (task: Task) => {
        const newTask = await api.addTask(task);
        if (task.project !== project) {
            refresh();
            return;
        }
        setTasks(tasks.concat(newTask))
    }

    const removeTask = async (id: string) => {
        await api.removeTask(id);
        setTasks(tasks.filter(t => t._id !== id))
    }

    useEffect(() => {
        setTasks(initTasks)
    }, [initTasks])

    return (
        <div className='max-w-44'>
            <h2 className='font-bold pb-2 text-lg'>{project}</h2>
            {tasks.map(task => <TaskItem task={task} key={task.name} removeTask={removeTask}></TaskItem>)}
            <AddTask addTask={addTask}></AddTask>
        </div>
    )
}

