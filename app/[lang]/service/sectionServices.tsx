import Image from 'next/image'
import React from 'react'
// logo from react icons
import { RiMedalFill } from 'react-icons/ri';

// props
interface Props {
  name: string,
  description?: string,
  logoUrl: string,
  url?: string,
}

// list item vertical
const ListItemVertical = ({ name, description, logoUrl, url }: Props) => {
  return <a href={url} target="_blank" className='p-5 flex flex-col items-center card-skill-hover gap-2'>
    {/* image */}
    <Image src={logoUrl} alt={name} width={40} height={40} style={{ width: 'auto', height: 'auto' }} />
    <div>
      {/* title */}
      <p className='text-xl font-semibold'>{name}</p>
      {/* description */}
      <p>{description}</p>
    </div>
  </a>
}

function SectionServices({ title, titleSolution, dataSkillSolutions, comingSoonTitle }: any) {
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
        <div className='flex flex-wrap justify-center'>
          {dataSkillSolutions !== "Data not found" && dataSkillSolutions !== "Internal Server Error" ? (
            // loop data
            dataSkillSolutions.map((skill: any, index: string) => {
              return <ListItemVertical
                key={index}
                name={skill.name}
                logoUrl={"/assets/image/skills/tech/" + skill.image}
              />
            })
          ) : (
            <div className='flex gap-2 items-center pb-5'>
              <p className='text-xl lg:text-2xl'>{comingSoonTitle} <br /> </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SectionServices