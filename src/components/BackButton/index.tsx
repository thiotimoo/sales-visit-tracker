"use client";
import { motion } from "framer-motion";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
    const router = useRouter();
    const handleClick = () => {
        router.back();
    };
    return (
        <motion.button
            className="p-4 rounded-md hover:bg-zinc-300"
            whileTap={{ scale: 0.9 }}
        >
            <X size={16} alt="Cancel" weight="bold" onClick={handleClick} />
        </motion.button>
    );
};

export default BackButton;
