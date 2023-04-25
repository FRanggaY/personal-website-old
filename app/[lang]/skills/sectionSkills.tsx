'use client'
import React from 'react'
// framer motion
import { motion } from "framer-motion" 
// logo from react icons
import { RiToolsFill, RiGlobeFill } from 'react-icons/ri';
// additional component
import { ListItemSkill, skillVariants } from '@/components/Card/CardSkill';

// props
interface Props {
  title: string;
  titleTechnology: string;
  titleLanguage: string;
  dataSkillTechs: any;
  dataLanguages: any;
  comingSoonTitle: string;
  comingSoonNote: string;
}

function SectionSkills({ title, titleTechnology, titleLanguage, dataSkillTechs, dataLanguages, comingSoonTitle, comingSoonNote }: Props) {
  return (
    <div>
      {/* title */}
      <div className='flex justify-center pb-5'>
        <p className='text-3xl lg:text-4xl font-semibold'>{title}</p>
      </div>
      {/* content skill tech */}
      <div className='border border-blue-200 p-5 mb-5'>
        {/* title */}
        <div className='flex gap-2 items-center pb-5'>
          <RiToolsFill size={40} className='navbar-text-color' />
          <p className='text-xl lg:text-2xl'> {titleTechnology} :</p>
        </div>
        {/* layout skill tech */}
        <motion.div
          variants={skillVariants}
          initial="hidden"
          animate="show"
          className='flex flex-wrap justify-center'
        >
          {dataSkillTechs !== "Data not found" && dataSkillTechs !== "Internal Server Error" ? (
            // loop data
            dataSkillTechs.map((skill: any, index: string) => {
              return <ListItemSkill
                key={index}
                name={skill.name}
                description={skill.description}
                logoUrl={"/assets/image/skills/tech/" + skill.image}
                url={skill.url}
              />
            })
          ) : (
            <div className='flex gap-2 items-center pb-5'>
              <p className='text-xl lg:text-2xl'>{comingSoonTitle} <br /> <small>{comingSoonNote}</small> </p>
            </div>
          )}
        </motion.div>
      </div>
      {/* content languages */}
      <div className='border border-blue-200 p-5 mb-5'>
        {/* title */}
        <div className='flex gap-2 items-center pb-5'>
          <RiGlobeFill size={40} className='navbar-text-color' />
          <p className='text-xl lg:text-2xl'> {titleLanguage} :</p>
        </div>
        {/* layout languages */}
        <motion.div 
          variants={skillVariants}
          initial="hidden"
          animate="show"
          className='flex flex-wrap justify-center'
        >
          {dataLanguages !== "Data not found" && dataLanguages !== "Internal Server Error" ? (
            // loop data
            dataLanguages.map((language: any, index: string) => {
              return <ListItemSkill
                key={index}
                name={language.name}
                description={language.proficieny}
                logoUrl={"/assets/image/languages/" + language.image}
              />
            })
          ) : (
            <div className='flex gap-2 items-center pb-5'>
              <p className='text-xl lg:text-2xl'>{comingSoonTitle} <br /> <small>{comingSoonNote}</small> </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
export default SectionSkills