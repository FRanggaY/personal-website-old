"use client"
import Image from 'next/image'
import React from 'react'
// framer motion
import { motion } from "framer-motion" 

// project skill props
interface SkillProps {
  name: string,
  description?: string,
  logoUrl: string,
  url?: string,
}

// framer motion
export const skillVariants:any = {
  hidden: { opacity : 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}
export const skillAnimate:any = {
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

// list item skill
export const ListItemSkill = ({ name, description, logoUrl, url }: SkillProps) => {
  return <motion.a
    variants={skillAnimate}
    href={url} 
    target="_blank" 
    className='p-5 flex items-center card-skill-hover gap-2'
    >
    {/* image */}
    <Image src={logoUrl} alt={name} width={40} height={40} style={{ width: 'auto', height: 'auto' }} priority={true} />
    <div>
      {/* title */}
      <p className='text-xl font-semibold'>{name}</p>
      {/* description */}
      <p>{description}</p>
    </div>
  </motion.a>
}