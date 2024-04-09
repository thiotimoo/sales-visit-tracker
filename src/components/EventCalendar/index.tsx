"use client";
import React, { useEffect, useState } from "react";
import HeaderCalendar from "./HeaderCalendar";
import GridCalendar from "./GridCalendar";
import HeaderWeek from "./HeaderWeek";

const EventCalendar = () => {
    const [viewMode, setViewMode] = useState(0);
    const [date, setDate] = useState(new Date());
    return (
        <div className="bg-zinc-100 rounded-md border border-zinc-300 flex flex-col divide-y divide-zinc-300 overflow-clip">
            <HeaderCalendar
                handleDate={setDate}
                date={date}
                viewMode={viewMode}
            />
            <HeaderWeek />
            <GridCalendar
                viewMode={viewMode}
                handleDate={setDate}
                date={date}
            />
        </div>
    );
};

export default EventCalendar;
