import { Task } from "@/app/tasks/interfaces/task";
const api = require("../../_utils/api");

export const tasksToEvents = (tasks:Task[]):Map<number,Task[]> => {
    const daysTask:Map<number,Task[]> = new Map<number,Task[]>();
    for (let task of tasks) {
        let curDate = task.date.getDate()
        if (daysTask.get(curDate) === undefined) {
            daysTask.set(curDate, [task])
        } else {
            daysTask.get(curDate)?.push(task)
        }
        
    }
    return daysTask;
}

export const getEvents = (setEvents:Function) => {
    api.getTasks().then((tasks:Task[])=>{
        setEvents(tasksToEvents(tasks))
    })
}