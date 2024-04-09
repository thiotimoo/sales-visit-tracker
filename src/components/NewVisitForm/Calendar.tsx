import { CalendarDots } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const Calendar = () => {
    return (
        <Link href="?modal=true" className="rounded-md bg-white w-full p-4 border-zinc-300 border items-center flex gap-2 font-bold text-sm">
            
            <CalendarDots size={24} />
            <p className="">{new Date().toLocaleDateString()}</p>
        </Link>
    );
};

export default Calendar;
