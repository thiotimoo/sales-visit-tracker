"use client";
import { CaretLeft } from "@phosphor-icons/react";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import React from "react";

interface ItemProps {
    prev?: boolean;
    handleDate: any;
}

const ChangeMonthButton = ({ prev, handleDate }: ItemProps) => {
    const handleClick = () => {
        handleDate((date: Date) => {
            if (prev) {
                if (date.getMonth() == 0)
                    return new Date(date.getFullYear() - 1, 11, 1);
                else
                    return new Date(date.getFullYear(), date.getMonth() - 1, 1);
            } else {
                if (date.getMonth() == 11)
                    return new Date(date.getFullYear() + 1, 0, 1);
                else
                    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
            }
        });
    };
    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            className="p-4 rounded-md hover:bg-zinc-300"
            onClick={handleClick}
        >
            {prev ? (
                <CaretLeft size={16} weight="bold" />
            ) : (
                <CaretRight size={16} weight="bold" />
            )}
        </motion.button>
    );
};

export default ChangeMonthButton;
