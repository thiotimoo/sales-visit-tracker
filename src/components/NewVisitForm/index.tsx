"use client";
import React, { useState } from "react";
import BackButton from "../BackButton";
import SaveVisitButton from "./SaveVisitButton";
import Appointment from "./Appointment";
import Location from "./Location";
import VariantContainer from "./VariantContainer";
import Contact from "./Contact";
import Calendar from "./Calendar";
import Time from "./Time";
import Note from "./Note";
import FormHeader from "./FormHeader";

const NewVisitForm = () => {
    const [appointment, setAppointment] = useState(false);
    const [contactPerson, setContactPerson] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    return (
        <div>
            <FormHeader />
            <div className="flex flex-col gap-2 m-auto max-w-screen-sm px-4">
                <input
                    className="bg-white rounded-md border-zinc-300 border p-2 w-full font-medium"
                    placeholder="Judul Visit"
                />
                <VariantContainer>
                    <Time />
                    <Calendar />
                </VariantContainer>
                <VariantContainer>
                    <Contact
                        contactPerson={contactPerson}
                        contactNumber={contactNumber}
                        handleNumber={setContactNumber}
                        handlePerson={setContactPerson}
                    />
                </VariantContainer>
                <VariantContainer>
                    <Location />
                    <Note />
                    <Appointment
                        appointment={appointment}
                        handleChange={setAppointment}
                    />
                </VariantContainer>
            </div>
        </div>
    );
};

export default NewVisitForm;
