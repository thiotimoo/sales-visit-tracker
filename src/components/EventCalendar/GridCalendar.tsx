import React from "react";
import ItemCalendar from "./ItemCalendar";

const GridCalendar = () => {
    return (
        <div className="grid grid-cols-7 bg-white">
            {[...Array(35)].map((e, i) => (
                <ItemCalendar index={i}/>
            ))}
        </div>
    );
};

export default GridCalendar;
