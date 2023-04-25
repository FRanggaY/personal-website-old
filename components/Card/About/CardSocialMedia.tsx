"use client"
import Image from 'next/image'
import React from 'react'
// framer motion
import { motion } from "framer-motion" 

// socialmedia props
interface SocialMediaProps {
  name: string,
  description?: string,
  logoUrl: string,
  url?: string,
  username?: string,
}
// framer motion
export const socialMediaVariants:any = {
  hidden: { opacity : 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}
export const socialMediaAnimate:any = {
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
// list item socialmedia
export const ListItemSocialMedia = ({ name, description, logoUrl, url, username }: SocialMediaProps) => {
  return <motion.a 
      variants={socialMediaAnimate} 
      href={url} 
      target="_blank" 
      className='p-5 flex items-center card-skill-hover gap-2'
    >
    {/* image */}
    <Image src={logoUrl} alt={name} width={40} height={40} style={{ width: 'auto', height: 'auto' }} priority={true} />
    <div>
      {/* title */}
      <p className='text-xl font-semibold'>{username ?? name}</p>
      {/* description */}
      <p>{description}</p>
    </div>
  </motion.a>
}