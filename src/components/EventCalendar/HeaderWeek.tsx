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
                return (
                    <>
                        <div key={i} className="sm:hidden">
                            <ItemWeek index={i} key={i} week={w.charAt(0)} />
                        </div>
                        <div key={i} className="hidden sm:block">
                            <ItemWeek index={i} key={i} week={w} />
                        </div>
                    </>
                );
            })}
        </div>
    );
};

export default HeaderWeek;
