"use client"
import React from 'react'
// framer motion
import { motion } from "framer-motion" 

// props
interface heroProps {
  greeting: string,
  name: string,
  positions: string[],
  greetingNote: string,
}

// framer motion
export const heroVariants:any = {
  hidden: { opacity : 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

export const heroAnimate:any = {
  hidden: { 
    opacity : 0,
    x: 30
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2
    }
  }
}

function Hero({ greeting, name, positions, greetingNote }: heroProps) {
  return (
    <motion.div 
      variants={heroVariants}
      initial="hidden"
      animate="show"
      className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover img-custom'
    >
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        {/* greeting */}
        <h2 className='text-4xl lg:text-5xl'>{greeting}</h2>
        {/* name */}
        <p className='py-5 text-4xl lg:text-5xl font-bold'>{name}</p>
        {/* greeting note */}
        <p className='py-5 text-md lg:text-xl'>{greetingNote}</p>
        {/* list position */}
        <div className='flex gap-4 flex-wrap'>
          {positions.map((item: any, index: any) => (
            // position
            <motion.div 
              key={index}
              variants={heroAnimate}
              className="px-8 py-2 border-l-2 border-b-2 border-blue-400 rounded-md">
              <h3>{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Hero