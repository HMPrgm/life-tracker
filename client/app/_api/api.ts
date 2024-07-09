import axios from 'axios'
import { Task } from '../tasks/interfaces/task';
import { LifeDate, stringToDate } from '../tasks/interfaces/date';



export async function getTasks(): Promise<Task[] | null> {
    try {
        const response = await axios.get("http://localhost:5000/tasks")
        const tasks = response.data.map(serverToClientTask)
        console.log(tasks);
        return tasks
    } catch (e) {
        return null
    }
}

export async function addTask(task:Task):Promise<boolean> {
    try {
        const response = await axios.post("http://localhost:5000/tasks", {task})
        return true
    } catch (e) {
        return false
    }
}

function serverToClientTask(server: { _id: string; name: string; date: string; completed: boolean; project: string; }): Task|null {
    const clientDate:LifeDate|null = stringToDate(server.date)
    if (!clientDate) {
        return null
    }
    return {
        _id: server._id,
        name: server.name,
        date: clientDate,
        completed: server.completed,
        project: server.project
    }
}
