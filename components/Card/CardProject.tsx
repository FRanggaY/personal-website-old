"use client"
import Image from 'next/image'
import React from 'react'
// framer motion
import { motion } from "framer-motion" 

// project platform props
interface ProjectPlatformProps {
  title: string,
  logoUrl: string,
  url: string,
  additionalClass?: string,
  width?: number,
  height?: number,
}

// project props
interface ProjectProps {
  projectUpdated: string,
  title: string,
  image?: string,
  url: string,
}

// framer motion
export const projectPlatformVariants:any = {
  hidden: { opacity : 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}
export const projectPlatformAnimate:any = {
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
// list item project platform
export const ListItemProjectPlatform = ({ title, logoUrl, url, additionalClass, width, height }: ProjectPlatformProps) => {
  return <motion.a 
    variants={projectPlatformAnimate}
    href={url} 
    className={`flex justify-end items-center border-2 rounded-lg hover:border-blue-400 ${additionalClass}`}
  >
    {/* platform image */}
    <Image src={logoUrl} alt={title} width={width ?? 80} height={height ?? 80} style={{ width: '100%', height: 'auto' }} />
    {/* platform title */}
    <h2 className='font-semibold'>{title.toUpperCase()}</h2>
  </motion.a>
}

// const list item project
export const ListItemProject = ({ projectUpdated, title, image, url }: ProjectProps) => {
  return <a 
    href={url} 
    target='_blank' 
    className='flex flex-col gap-2 items-center p-2 border-2 rounded-lg hover:border-blue-400' 
  >
    {/* project image */}
    {image && <Image src={ image.includes('http') ? image : "/assets/image/projects/" + image} alt={title} width={200} height={200} style={{ width: '100%', height: '150px' }} priority={true} />}
    {/* project title */}
    <h2 className='font-semibold'>{title.toUpperCase()}</h2>
    {/* project date */}
    <span className='text-gray-400'>{projectUpdated}</span>
  </a>
}