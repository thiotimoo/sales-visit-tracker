"use client"
import React from 'react'
import {motion} from 'framer-motion'

const AddVisitButton = () => {
  return (
    <motion.button whileTap={{ scale: 0.9 }} className='bg-blue-800 rounded-md text-white text-xs font-semibold px-4 py-2'>Add Visit</motion.button>
  )
}

export default AddVisitButton