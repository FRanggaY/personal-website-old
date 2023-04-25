"use client"
import Image from 'next/image'
import React from 'react'
// framer motion
import { motion } from "framer-motion" 

// education props
interface EducationProps {
  url?: string,
  logoUrl: string,
  title: string,
  degree?: string,
  fieldOfStudy: string,
  startDate: string,
  endDate: string,
}
  
// framer motion
export const educationVariants:any = {
  hidden: { opacity : 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}
export const educationAnimate:any = {
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

// list item education
export const ListItemEducation = ({ url, logoUrl, title, degree, fieldOfStudy, startDate, endDate }: EducationProps) => {
    if (url) {
      return <motion.a
          variants={educationAnimate}
          href={url} 
          target="_blank" 
          className='p-5 flex flex-col items-center card-skill-hover gap-2'
        >
        {/* image */}
        <Image src={"/assets/image/educations/" + logoUrl} alt={title} width={150} height={150} style={{ width: 'auto', height: '150px' }} priority={true} />
        <div>
          {/* list */}
          <p className='text-xl font-semibold'>{degree} - {fieldOfStudy}</p>
          <span>{startDate} - {endDate}</span>
        </div>
      </motion.a>
    } else { // if url empty so image set up with company name title
      return <motion.div 
          variants={educationAnimate}
          className='p-5 flex flex-col items-center card-skill-hover gap-2'
        >
        {/* title */}
        <div style={{ width: '150px', height: '150px' }} className='flex items-center justify-items-center'>
          <p className='text-xl font-semibold text-center'>{title}</p>
        </div>
        <div>
          {/* list */}
          <p className='text-xl font-semibold'>{degree} - {fieldOfStudy}</p>
          <span>{startDate} - {endDate}</span>
        </div>
      </motion.div>
    }
}