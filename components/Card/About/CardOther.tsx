"use client"
import React from 'react'
// framer motion
import { motion } from "framer-motion" 

// other props
interface OtherProps {
  name: string,
  logo: any,
  url: string,
}
// framer motion
export const otherVariants:any = {
  hidden: { opacity : 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}
export const otherAnimate:any = {
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
// list item other
export const ListItemOther = ({ name, logo, url }: OtherProps) => {
  return <motion.a 
    variants={otherAnimate}  
    href={url} 
    target="_blank"
    className='p-5 flex items-center card-skill-hover gap-2'
  >
    {/* logo */}
    {logo}
    <div>
      {/* title */}
      <p className='text-xl font-semibold'>{name}</p>
    </div>
  </motion.a>
}