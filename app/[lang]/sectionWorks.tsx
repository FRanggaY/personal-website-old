"use client"
import React from 'react'
// framer motion
import { motion } from "framer-motion"
// additional component
import { ListItemProjectPlatform, projectPlatformVariants } from '@/components/Card/CardProject'

interface Props {
  title: string;
  datas: any;
  langUrl: string;
}

function SectionWorks({ title, datas, langUrl }: Props) {
  return (
    <div className='flex items-center justify-center flex-col gap-3'>
      {/* title */}
      <h2 className='text-3xl lg:text-4xl font-semibold'>{title}</h2>
      {/* layout project platform */}
      <motion.div 
        variants={projectPlatformVariants}
        initial="hidden"
        animate="show"
        className='pt-8 flex gap-5 flex-wrap justify-center'
      >
        {/* loop data */}
        {datas.map((data: any, index: string) => {
          return <ListItemProjectPlatform key={index}
            title={data.title}
            logoUrl={data.logo}
            url={langUrl + "/" + data.url}
            additionalClass='flex-col gap-10  px-20 py-10'
            width={80}
            height={80}
          />
        })}
      </motion.div>
    </div>
  )
}
export default SectionWorks