export interface Task{
    name:string;
    date:string;
    project:ProjectType;
}

export enum ProjectType{
    School,
    Work,
    Vacation
}

export const tasks:Task[] = [
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