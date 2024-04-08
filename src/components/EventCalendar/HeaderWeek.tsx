import React from "react";
import ItemWeek from "./ItemWeek";

const HeaderWeek = () => {
    const weeks = [
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
        "Minggu",
    ];
    return (
        <div className="grid grid-cols-7 w-full bg-white">
            {weeks.map((w, i) => {
                return <ItemWeek index={i} week={w} />;
            })}
        </div>
    );
};

export default HeaderWeek;
