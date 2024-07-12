import { Task } from "@/app/tasks/interfaces/task";

export const tasksToEvents = (tasks:Task[]):Map<number,string> => {
    const daysTask:Map<number,string> = new Map<number,string>
    for (let task of tasks) {
        daysTask.set(task.date.getDate(), task.name)
    }
    return daysTask;
}