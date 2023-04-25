"use client"
import React from 'react'
// additional component
import { ListItemService, serviceVariants } from '@/components/Card/CardService';
// logo from react icons
import { RiMedalFill } from 'react-icons/ri';
// framer motion
import { motion } from "framer-motion" 

// props
interface Props {
  title: string;
  titleSolution: string;
  dataSkillSolutions: any;
  comingSoonTitle: string;
}

function SectionServices({ title, titleSolution, dataSkillSolutions, comingSoonTitle }: Props) {
  return (
    <div>
      {/* title */}
      <div className='flex justify-center pb-5'>
        <p className='text-3xl lg:text-4xl font-semibold'>{title}</p>
      </div>
      {/* content skill solution */}
      <div className='border border-blue-200 p-5 mb-5'>
        {/* title */}
        <div className='flex gap-2 items-center pb-5'>
          <RiMedalFill size={40} className='navbar-text-color' />
          <p className='text-xl lg:text-2xl'> {titleSolution} :</p>
        </div>
        {/* layout skill solution */}
        <motion.div 
          variants={serviceVariants}
          initial="hidden"
          animate="show"
          className='flex flex-wrap justify-center'
        >
          {dataSkillSolutions !== "Data not found" && dataSkillSolutions !== "Internal Server Error" ? (
            // loop data
            dataSkillSolutions.map((skill: any, index: string) => {
              return <ListItemService
                key={index}
                name={skill.name}
                logoImage={"/assets/image/skills/solution/" + skill.image}
                description={skill.description}
              />
            })
          ) : (
            <div className='flex gap-2 items-center pb-5'>
              <p className='text-xl lg:text-2xl'>{comingSoonTitle} <br /> </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default SectionServices