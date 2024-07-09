import { Task } from "../interfaces/task"

export default function TaskItem({task, removeTask}:{task:Task, removeTask:Function}) {

  function removeTaskHelper(){
    removeTask(task._id);
  }

  return (
    <div className="border-2 border-slate-600 rounded p-2 my-2">
        <h3>{task.name}</h3>
        <div className="flex items-center">
          <p className="text-xs text-green-800">{task.date.toString()}</p>
          <button className="rounded bg-black p-1 mx-1 text-white" onClick={removeTaskHelper}>Remove</button>
        </div>
    </div>
    
  )
}
