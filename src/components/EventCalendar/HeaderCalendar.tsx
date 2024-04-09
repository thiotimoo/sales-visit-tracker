import React from "react";
import AddVisitButton from "./AddVisitButton";
import ChangeMonthButton from "./ChangeMonthButton";

interface ItemProps {
    date: Date;
    handleDate: any;
    viewMode: any;
}
const HeaderCalendar = ({ date, handleDate, viewMode }: ItemProps) => {
    return (
        <div className="flex flex-row p-4 items-center justify-between">
            <p className="text-sm font-semibold">
                {date.toLocaleString("default", { month: "long" })}{" "}
                {date.getFullYear()}
            </p>
            <div className="flex flex-row gap-2">
                <ChangeMonthButton handleDate={handleDate} prev />
                <ChangeMonthButton handleDate={handleDate} />
                <AddVisitButton />
            </div>
        </div>
    );
};

export default HeaderCalendar;
