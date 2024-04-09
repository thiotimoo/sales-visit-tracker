"use client"
import React from "react";
import {motion} from "framer-motion";

const SaveVisitButton = () => {
    return (
        <motion.button
            className="bg-blue-800 rounded-md text-white text-xs font-semibold px-4 py-2"
            whileTap={{ scale: 0.9 }}
        >
            Save
        </motion.button>
    );
};

export default SaveVisitButton;
