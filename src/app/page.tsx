import EventCalendar from "@/components/EventCalendar";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-2">
            <div className="container">
                <EventCalendar mode={0} onDateClick={null}/>
            </div>
        </main>
    );
}
