import { LifeDate } from "./date";

export interface Task{
    _id:string;
    name:string;
    date:LifeDate;
    project:string;
    completed:boolean;
}

// export enum ProjectType{
//     School,
//     Work,
//     Vacation
// }