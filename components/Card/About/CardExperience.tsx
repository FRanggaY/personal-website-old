"use client"
import Image from 'next/image'
import React from 'react'
// framer motion
import { motion } from "framer-motion" 

// experience props
interface ExperienceProps {
  url?: string,
  imageUrl: string,
  name: string,
  employmentType?: string,
  companyName: string,
  locationType?: string,
  startDate: string,
  endDate: string,
}
// framer motion
export const experienceVariants:any = {
  hidden: { opacity : 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}
export const experienceAnimate:any = {
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
// list item experience
export const ListItemExperience = ({ name, imageUrl, url, companyName, employmentType, locationType, startDate, endDate }: ExperienceProps) => {
  if (url) {
    return <motion.a
        variants={experienceAnimate} 
        href={url} 
        target="_blank" 
        className='p-5 flex flex-col items-center card-skill-hover gap-2'
      >
      {/* image */}
      <div style={{ width: '100%', height: '100%' }}>
        <Image src={"/assets/image/experiences/" + imageUrl} alt={name} width={200} height={200} style={{ width: 'auto', height: '150px' }} priority={true} />
      </div>
      <div>
        {/* list */}
        <span>{employmentType} - {locationType}</span>
        <p className='text-xl font-semibold'>{name}</p>
        <span>{startDate} - {endDate}</span>
      </div>
    </motion.a>
  } else { // if url empty so image set up with company name title
    return <motion.div 
        variants={experienceAnimate} 
        className='p-5 flex flex-col items-center card-skill-hover gap-2'
      >
      {/* companyName */}
      <div style={{ width: '100%', height: '150px' }} className='flex items-center justify-items-center'>
        <p className='text-xl font-semibold text-center'>{companyName}</p>
      </div>
      <div>
        {/* list */}
        <span>{employmentType} - {locationType}</span>
        <p className='text-xl font-semibold'>{name}</p>
        <span>{startDate} - {endDate}</span>
      </div>
    </motion.div>
  }
}