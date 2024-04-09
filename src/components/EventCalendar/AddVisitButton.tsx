"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation';

const AddVisitButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/new-visit")
  }
  return (
    <motion.button whileTap={{ scale: 0.9 }} className='bg-blue-800 rounded-md text-white text-xs font-semibold px-4 py-2' onClick={handleClick}>Add Visit</motion.button>
  )
}

export default AddVisitButton