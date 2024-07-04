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