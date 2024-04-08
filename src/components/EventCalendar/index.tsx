import React from "react";
import HeaderCalendar from "./HeaderCalendar";
import GridCalendar from "./GridCalendar";
import HeaderWeek from "./HeaderWeek";

const EventCalendar = () => {
    return <div className="bg-zinc-100 rounded-md border border-zinc-300 flex flex-col divide-y divide-zinc-300 overflow-clip">
      <HeaderCalendar/>
      <HeaderWeek/>
      <GridCalendar/>
    </div>;
};

export default EventCalendar;