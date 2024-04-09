import MainContainer from "@/components/MainContainer";
import {
    ArrowRight,
    Calendar,
    CalendarDots,
    Clock,
    Person,
    Phone,
    User,
    X,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import SaveVisitButton from "@/components/NewVisit/SaveVisitButton";
import BackButton from "@/components/BackButton";

const NewVisitPage = () => {
    return (
        <MainContainer>
            <div className="flex flex-row items-center justify-around p-4 m-auto max-w-screen-sm">
                <div className="flex-1">
                    <BackButton/>
                </div>
                <h1 className="font-black">New Visit</h1>
                <div className="flex-1 justify-end flex">
                    <SaveVisitButton />
                </div>
            </div>
            <div className="flex flex-col gap-2 m-auto max-w-screen-sm px-4">
                <input
                    className="bg-white rounded-md border-zinc-300 border p-2 w-full font-medium"
                    placeholder="Judul Visit"
                />
                <div className="p-2 bg-zinc-100 rounded-md gap-2 flex flex-col">
                    <div className="flex flex-row justify-center items-center gap-2">
                        <button className="rounded-md bg-white w-full p-4 border-zinc-300 border text-center justify-center items-center flex gap-2 font-bold">
                            <Clock size={24} />
                            <p className="">09:00</p>
                        </button>
                        <div className="p-4 bg-zinc-200 rounded-md">
                            <ArrowRight weight="bold" size={16} />
                        </div>
                        <button className="rounded-md bg-white w-full p-4 border-zinc-300 border text-center justify-center items-center flex gap-2 font-bold">
                            <Clock size={24} />
                            <p className="">09:00</p>
                        </button>
                    </div>
                    <button className="rounded-md bg-white w-full p-4 border-zinc-300 border items-center flex gap-2 font-bold">
                        <CalendarDots size={24} />
                        <p className="">{new Date().toLocaleDateString()}</p>
                    </button>
                </div>
                <div className="p-2 bg-zinc-100 rounded-md gap-2 flex flex-col">
                    <div className="rounded-md bg-white w-full p-4 border-zinc-300 border items-center flex gap-2 font-medium">
                        <User size={24} />
                        <input className="bg-white focus:outline-0 w-full" placeholder="Contact Person" />
                    </div>
                    <div className="rounded-md bg-white w-full p-4 border-zinc-300 border items-center flex gap-2 font-medium">
                        <Phone size={24} />
                        <input className="bg-white focus:outline-0 w-full" placeholder="Contact Number" />
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default NewVisitPage;
