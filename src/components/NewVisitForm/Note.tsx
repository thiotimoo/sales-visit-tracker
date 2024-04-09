import { MapPin } from "@phosphor-icons/react";
import { Notepad } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Note = () => {
    return (
        <div className="rounded-md bg-white w-full p-4 border-zinc-300 border items-center flex gap-2 font-medium text-sm">
            <Notepad size={24} />
            <input
                className="bg-white focus:outline-0 w-full"
                placeholder="Note"
            />
        </div>
    );
};

export default Note;
