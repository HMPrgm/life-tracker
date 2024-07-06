import axios from 'axios'
import { Task } from '../tasks/interfaces/task';


export async function getTasks(): Promise<Task[]|null> {
    try {
        const response = await axios.get("http://localhost:5000/tasks")
        return response.data
    } catch (e) {
        return null
    }
}


