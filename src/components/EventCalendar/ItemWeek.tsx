import React from "react";

interface ItemProps {
    index: number;
    week: string;
}
const ItemWeek = ({ index, week }: ItemProps) => {
    const _divide_x = (index + 1) % 7 != 0 && "border-r border-zinc-300";
    return (
        <div className={`p-2 ${_divide_x}`}>
            <p className="text-xs text-center">{week}</p>
        </div>
    );
};

export default ItemWeek;
