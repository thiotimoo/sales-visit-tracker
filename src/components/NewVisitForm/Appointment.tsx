import {
    PencilSimpleLine,
    PencilSimpleSlash,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";

interface ItemProps {
    appointment: boolean;
    handleChange: any;
}
const Appointment = ({ appointment, handleChange }: ItemProps) => {
    const _style_true = appointment
        ? "bg-green-400 border-green-500"
        : "bg-white border-zinc-300";
    const _style_false = !appointment
        ? "bg-red-400 border-red-600"
        : "bg-white border-zinc-300";
    const trueClick = () => handleChange(true);
    const falseClick = () => handleChange(false);
    return (
        <div className="flex flex-row justify-center items-center gap-2">
            <button
                className={`rounded-md w-full p-4 border text-center justify-center items-center flex gap-2 font-bold text-sm ${_style_true}`}
                onClick={trueClick}
            >
                <PencilSimpleLine size={24} />
                <p>Appointment</p>
            </button>
            <button
                className={`rounded-md w-full p-4 border text-center justify-center items-center flex gap-2 font-bold text-sm ${_style_false}`}
                onClick={falseClick}
            >
                <PencilSimpleSlash size={24} />
                <p>Without</p>
            </button>
        </div>
    );
};

export default Appointment;
