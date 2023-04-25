"use client"
import Image from 'next/image'
import React from 'react'
// framer motion
import { motion } from "framer-motion" 

// service props
interface ServiceProps {
  name: string,
  description?: string,
  logoImage: string,
  url?: string,
}
// framer motion
export const serviceVariants:any = {
  hidden: { opacity : 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}
export const serviceAnimate:any = {
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
// list item service
export const ListItemService = ({ name, description, logoImage, url }: ServiceProps) => {
  return <motion.a 
      variants={serviceAnimate}
      href={url} 
      target="_blank" 
      className='p-5 flex flex-col items-center card-skill-hover gap-2'
    >
    {/* image */}
    <Image src={logoImage} alt={name} width={250} height={250} style={{ width: 'auto', height: 'auto' }} priority={true} />
    <div>
      {/* title */}
      <p className='text-xl font-semibold'>{name}</p>
      {/* description */}
      <p style={{ width: '250px'}}>{description}</p>
    </div>
  </motion.a>
}