// components/Calendar.tsx
'use client'
import React, { useState } from 'react';
import {tasksToEvents} from '../interfaces/event'
import { Task } from '@/app/tasks/interfaces/task';
const api = require("../../_utils/api");

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const newDay = (day: number, content:string) => newDayObject(day.toString() + content, day.toString());
const newDayObject = (content: string, key: string) => 
    <div key={key} className="p-2 border border-gray-200 h-[15vh]">
        {content}
    </div>;
const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const getDaysInMonth = (year: number, month: number): number => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year: number, month: number): number => {
        return new Date(year, month, 1).getDay();
    };

    const renderDays = async () => {
        const year: number = currentDate.getFullYear();
        const month: number = currentDate.getMonth();
        const daysInMonth: number = getDaysInMonth(year, month);
        const firstDay: number = getFirstDayOfMonth(year, month);
        const tasks:Task[] = await api.getTasks()
        const daysTask:Map<number,string> = tasksToEvents(tasks)

        const days = [];
        for (let i: number = 0; i < firstDay; i++) {
            days.push(newDayObject('', `empty-${i}`));
        }

        for (let day: number = 1; day <= daysInMonth; day++) {
            
            days.push(
                newDay(day, (daysTask.get(day)===undefined?'':daysTask.get(day) as string))
            );
        }
        for (let i: number = 0; i < 7 - (firstDay + daysInMonth) % 7; i++) {
            days.push(newDayObject('', `empty-${7 + i}`));
        }

        return days;
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    //   <button onClick={handlePrevMonth} className="px-4 py-2 bg-blue-500 text-white rounded">Prev</button>
    {/* <button onClick={handleNextMonth} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button> */ }
    return (
        <div className=" p-4 bg-white">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">
                    {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
            </div>
            <div className="grid grid-cols-7">
                {daysOfWeek.map((day) => (
                    <div key={day} className="p-2 font-bold text-center border border-gray-200">
                        {day}
                    </div>
                ))}
                {renderDays()}
            </div>
        </div>
    );
};

export default Calendar;