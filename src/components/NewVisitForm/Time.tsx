import { ArrowRight, Clock } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Time = () => {
    return (
        <div className="flex flex-row justify-center items-center gap-2">
            <button className="rounded-md bg-white w-full p-4 border-zinc-300 border text-center justify-center items-center flex gap-2 font-bold text-sm">
                <Clock size={24} />
                <p className="">09:00</p>
            </button>
            <div className="p-4 bg-zinc-200 rounded-md">
                <ArrowRight weight="bold" size={16} />
            </div>
            <button className="rounded-md bg-white w-full p-4 border-zinc-300 border text-center justify-center items-center flex gap-2 font-bold text-sm">
                <Clock size={24} />
                <p className="">09:00</p>
            </button>
        </div>
    );
};

export default Time;
