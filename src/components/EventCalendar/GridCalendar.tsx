import React from "react";
import ItemCalendar from "./ItemCalendar";

interface GenerateCalendarProps {
    year: number;
    month: number;
}

const getCalendarDates = ({ year, month }: GenerateCalendarProps) => {
    const dates = [];
    const firstDay = new Date(year, month + 1, 1).getDay();
    const firstPrevDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const daysInNextMonth = new Date(year, month + 2, 0).getDate();

    // Calculate the starting day for displaying the previous month's dates
    const prevMonthStartDay = (firstPrevDay - 1 + 7) % 7;

    // Add cells for displaying the previous month's dates
    for (let i = 0; i < prevMonthStartDay; i++) {
        const prevMonthDate = daysInPrevMonth - prevMonthStartDay + i + 1;
        dates.push({
            date: prevMonthDate,
            isCurrentMonth: false,
        });
        //setCalendarElements((e: any) => [...e, dayElement]);
    }

    // Add days of the current month
    for (let i = 0; i < daysInMonth; i++) {
        dates.push({
            date: i + 1,
            isCurrentMonth: true,
        });
        //setCalendarElements((e: any) => [...e, dayElement]);
    }

    // Add days of the next month
    for (let i = 0; i < 42 - (prevMonthStartDay + daysInMonth); i++) {
        dates.push({
            date: i + 1,
            isCurrentMonth: false,
        });
        //setCalendarElements((e: any) => [...e, dayElement]);
    }

    return dates;
};

interface ItemProps {
    date: Date,
    handleDate: any,
    viewMode: number,
}
const GridCalendar = ({date, handleDate, viewMode}: ItemProps) => {
    return (
        <div className="grid grid-cols-7 bg-white">
            {getCalendarDates({ year: date.getFullYear(), month: date.getMonth() }).map((date, index) => (
                <ItemCalendar index={index} date={date.date} viewMode={viewMode} isCurrentMonth={date.isCurrentMonth}/>
            ))}
        </div>
    );
};

export default GridCalendar;
