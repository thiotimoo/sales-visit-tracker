import { MapPin } from "@phosphor-icons/react";
import React from "react";

const Location = () => {
    return (
        <div className="rounded-md bg-white w-full p-4 border-zinc-300 border items-center flex gap-2 font-medium text-sm">
            <MapPin size={24} />
            <input
                className="bg-white focus:outline-0 w-full"
                placeholder="Location"
            />
        </div>
    );
};

export default Location;
