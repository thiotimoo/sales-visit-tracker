import EventCalendar from "@/components/EventCalendar";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-2">
            <div className="container">
                <h1 className="font-black text-xl p-4">Sales Visit Tracker</h1>
                <EventCalendar/>
            </div>
        </main>
    );
}
