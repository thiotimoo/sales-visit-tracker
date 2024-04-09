import { Phone, User } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import PhoneInput from "react-phone-number-input/input";
interface ItemProps {
    contactNumber: string;
    contactPerson: string;
    handleNumber: any;
    handlePerson: any;
}
const Contact = ({ contactNumber, handleNumber }: ItemProps) => {
    return (
        <div className="bg-white rounded-md flex flex-col border-zinc-300 border divide-y divide-zinc-300">
            <div className="w-full p-4 items-center flex gap-2 font-medium text-sm">
                <User size={24} />
                <input
                    className="bg-white focus:outline-0 w-full"
                    placeholder="Contact Person"
                />
            </div>
            <div className="w-full p-4 items-center flex gap-2 font-medium text-sm">
                <Phone size={24} />
                <PhoneInput
                    className="bg-white focus:outline-0 w-full"
                    placeholder="Enter phone number"
                    value={contactNumber}
                    onChange={handleNumber}
                />
            </div>
        </div>
    );
};

export default Contact;
