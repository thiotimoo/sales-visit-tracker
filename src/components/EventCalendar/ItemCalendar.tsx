import React from "react";

interface ItemProps {
    index: number;
}
const ItemCalendar = ({ index }: ItemProps) => {
    const total_row = 5;
    const _divide_x = (index + 1) % 7 != 0 && "border-r border-zinc-300";
    const _divide_y = index < (total_row - 1) * 7 && "border-b border-zinc-300";
    return (
        <div className={`h-24 p-4 ${_divide_y} ${_divide_x}`}>
            <p className="text-xs">{index}</p>
        </div>
    );
};

export default ItemCalendar;
