import { Task } from "../interfaces/task"

export default function TaskItem({task}:{task:Task}) {
  return (
    <div className="border-2 border-slate-600 rounded p-2 my-2">
        <h3>{task.name}</h3>
        <p className="text-xs text-green-800">{task.date}</p>
    </div>
    
  )
}
