"use client";
import siteMetadata from '@/lib/siteMetaData';
import React from 'react'
import MyProfile from '@/public/assets/profile/my-profile.jpg'
import Image from 'next/image';
import { motion } from "framer-motion";

const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const HeroProfile = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className='flex flex-wrap justify-center gap-5'>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 1 * stagger,
          ease: "easeInOut",
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
      >
        <Image
          priority
          src={MyProfile}
          width={200}
          alt={siteMetadata.authorInitial ?? 'profile'}
          className='p-2 bg-slate-200 rounded-full'
        />
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 2 * stagger,
          ease: "circInOut",
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
      >
        <div className='text-left p-5'>
          <p className='text-xl text-blue-600 dark:text-orange-600 font-normal mt-2'>{title}</p>
          <p className='text-4xl md:text-5xl font-semibold mt-4'>{siteMetadata.author}</p>
          <p className='text-2xl md:text-3xl font-light mt-2'>{description}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroProfile
