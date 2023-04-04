import Image from 'next/image'
import React from 'react'
// logo from react icons
import { RiToolsFill, RiGlobeFill, RiMedalFill } from 'react-icons/ri';

// props
interface Props {
  name: string,
  description?: string,
  logoUrl: string,
  url?: string,
}

// list item
const ListItem = ({ name, description, logoUrl, url }: Props) => {
  return <a href={url} target="_blank" className='p-5 flex items-center card-skill-hover gap-2'>
    {/* image */}
    <Image src={logoUrl} alt={name} width={40} height={40} />
    <div>
      {/* title */}
      <p className='text-xl font-semibold'>{name}</p>
      {/* description */}
      <p>{description}</p>
    </div>
  </a>
}

function SectionSkills({ title, titleTechnology, titleSolution, titleLanguage, dataSkillTechs, dataSkillSolutions, dataLanguages, comingSoonTitle, comingSoonNote }: any) {
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
        <div className='flex flex-wrap justify-center'>
          {dataSkillTechs !== "Data not found" && dataSkillTechs !== "Internal Server Error" ? (
            // loop data
            dataSkillTechs.map((skill: any, index: string) => {
              return <ListItem
                key={index}
                name={skill.name}
                description={skill.description}
                logoUrl={"/assets/logo/skills/tech/" + skill.image}
                url={skill.url}
              />
            })
          ) : (
            <div className='flex gap-2 items-center pb-5'>
              <p className='text-xl lg:text-2xl'>{comingSoonTitle} <br /> <small>{comingSoonNote}</small> </p>
            </div>
          )}
        </div>
      </div>
      {/* content skill solution */}
      <div className='border border-blue-200 p-5 mb-5'>
        {/* title */}
        <div className='flex gap-2 items-center pb-5'>
          <RiMedalFill size={40} className='navbar-text-color' />
          <p className='text-xl lg:text-2xl'> {titleSolution} :</p>
        </div>
        {/* layout skill solution */}
        <div className='flex flex-wrap justify-center'>
          {dataSkillSolutions !== "Data not found" && dataSkillSolutions !== "Internal Server Error" ? (
            // loop data
            dataSkillSolutions.map((skill: any, index: string) => {
              return <ListItem
                key={index}
                name={skill.name}
                logoUrl={"/assets/logo/skills/tech/" + skill.image}
              />
            })
          ) : (
            <div className='flex gap-2 items-center pb-5'>
              <p className='text-xl lg:text-2xl'>{comingSoonTitle} <br /> <small>{comingSoonNote}</small> </p>
            </div>
          )}
        </div>
      </div>
      {/* content languages */}
      <div className='border border-blue-200 p-5 mb-5'>
        {/* title */}
        <div className='flex gap-2 items-center pb-5'>
          <RiGlobeFill size={40} className='navbar-text-color' />
          <p className='text-xl lg:text-2xl'> {titleLanguage} :</p>
        </div>
        {/* layout languages */}
        <div className='flex flex-wrap justify-center'>
          {dataLanguages !== "Data not found" && dataLanguages !== "Internal Server Error" ? (
            // loop data
            dataLanguages.map((language: any, index: string) => {
              return <ListItem
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
        </div>
      </div>
    </div>
  )
}
export default SectionSkills