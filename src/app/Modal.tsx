"use client";
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import EventCalendar from "@/components/EventCalendar";

function Modal() {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();

    return (
        <>
            {modal &&
                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-40 z-50 overflow-auto flex justify-center items-center">
                    <div className="bg-white m-auto p-4 rounded-lg">
                        <div className="flex flex-col items-center">
                            <EventCalendar mode={1} onDateClick={null} />
                        </div>
                    </div>
                </dialog>
            }
        </>
    );
}

export default Modal;
