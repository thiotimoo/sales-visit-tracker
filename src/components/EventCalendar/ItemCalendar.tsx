import React from "react";

interface ItemProps {
    index: number;
    date: number;
    isCurrentMonth: boolean;
}
const ItemCalendar = ({ index, date, isCurrentMonth }: ItemProps) => {
    const total_row = 6;
    const _divide_x = (index + 1) % 7 != 0 && "border-r border-zinc-300";
    const _divide_y = index < (total_row - 1) * 7 && "border-b border-zinc-300";
    const _outside_month = (!isCurrentMonth) && "bg-zinc-100 text-zinc-500"
    return (
        <div className={`h-24 p-4 ${_divide_y} ${_divide_x} ${_outside_month}`}>
            <p className="text-xs">{date}</p>
        </div>
    );
};

export default ItemCalendar;
