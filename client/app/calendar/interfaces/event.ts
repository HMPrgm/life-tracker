import { Task } from "@/app/tasks/interfaces/task";

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