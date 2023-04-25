'use client'
import React from 'react'
// framer motion
import { motion } from "framer-motion"
// additional component
import { ListItemExperience, experienceVariants } from '@/components/Card/About/CardExperience'
import { ListItemEducation, educationVariants } from '@/components/Card/About/CardEducation'
import { ListItemSocialMedia, socialMediaVariants } from '@/components/Card/About/CardSocialMedia'
import { ListItemOther, otherVariants } from '@/components/Card/About/CardOther'
// logo from react icons
import { RiProfileFill, RiShieldStarFill, RiMapPinUserFill, RiBriefcase4Fill } from 'react-icons/ri'

// props
interface Props {
  title: string;
  profileName: string;
  profilePositions: any;
  titleSocialMedia: string;
  dataSocialMedias: any;
  titleExperience: string;
  dataExperiences: any;
  titleEducation: string;
  dataEducations: any;
  titleOther: string;
  dataOthers: any;
}

// data list other
const dataListOther: any = {
  'cv': {
    'logo': <RiProfileFill size={50} />,
    'url': process.env.YOURURLCV,
  },
  'certificate': {
    'logo': <RiShieldStarFill size={50} />,
    'url': process.env.YOURURLCERTIFICATE,
  },
}

function SectionAbout({ title, profileName, profilePositions, titleSocialMedia, dataSocialMedias, titleExperience, dataExperiences, titleEducation, dataEducations, titleOther, dataOthers }: Props) {
  return (
    <div>
      {/* title */}
      <div className='flex justify-center pb-5'>
        <p className='text-3xl lg:text-4xl font-semibold'>{title}</p>
      </div>
      <div className='pb-8 flex flex-col gap-4'>
        <p className='text-2xl lg:text-xl font-sans flex gap-2 items-center'>
          <RiMapPinUserFill size={50} /> {profileName}
        </p>
        <p className='flex gap-2 flex-wrap items-center text-2xl lg:text-xl'>
          <RiBriefcase4Fill size={50} />
          {profilePositions.map((item: any, index: any) => (
            // position
            <span key={index}>{item}{index !== profilePositions.length - 1 && <span>, </span>} </span>
          ))}
        </p>
      </div>
      {/* content experiences */}
      <div className='border border-blue-200 p-5 mb-5'>
        {/* title */}
        <div className='flex gap-2 items-center pb-5'>
          <p className='text-xl lg:text-2xl'> {titleExperience} :</p>
        </div>
        {/* layout experience */}
        <motion.div
          variants={experienceVariants}
          initial="hidden"
          animate="show"
          className='flex flex-wrap justify-center items-end'
        >
          {dataExperiences !== "Data not found" && dataExperiences !== "Internal Server Error" ? (
            // loop data
            dataExperiences.map((experience: any, index: string) => {
              return <ListItemExperience
                key={index}
                name={experience.name}
                companyName={experience.companyName}
                employmentType={experience.employmentType}
                locationType={experience.locationType}
                startDate={experience.startDate}
                endDate={experience.endDate}
                imageUrl={experience.image}
                url={experience.url}
              />
            })
          ) : (
            <div></div>
          )}
        </motion.div>
      </div>
      {/* content educations */}
      <div className='border border-blue-200 p-5 mb-5'>
        {/* title */}
        <div className='flex gap-2 items-center pb-5'>
          <p className='text-xl lg:text-2xl'> {titleEducation} :</p>
        </div>
        {/* layout educations */}
        <motion.div 
          variants={educationVariants}
          initial="hidden"
          animate="show"
          className='flex flex-wrap justify-center items-end'
        >
          {dataEducations !== "Data not found" && dataEducations !== "Internal Server Error" ? (
            // loop data
            dataEducations.map((education: any, index: string) => {
              return <ListItemEducation
                key={index}
                title={education.title}
                degree={education.degree}
                fieldOfStudy={education.fieldOfStudy}
                startDate={education.startDate}
                endDate={education.endDate}
                logoUrl={education.logo}
                url={education.url}
              />
            })
          ) : (
            <div></div>
          )}
        </motion.div>
      </div>
      {/* content social media */}
      <div className='border border-blue-200 p-5 mb-5'>
        {/* title */}
        <div className='flex gap-2 items-center pb-5'>
          <p className='text-xl lg:text-2xl'> {titleSocialMedia} :</p>
        </div>
        {/* layout social media */}
        <motion.div
          variants={socialMediaVariants}
          initial="hidden"
          animate="show"
          className='flex flex-wrap justify-center'
        >
          {dataSocialMedias !== "Data not found" && dataSocialMedias !== "Internal Server Error" ? (
            // loop data
            dataSocialMedias.map((socialmedia: any, index: string) => {
              return <ListItemSocialMedia
                key={index}
                name={socialmedia.name}
                username={socialmedia.username}
                logoUrl={"/assets/image/social_medias/" + socialmedia.image}
                url={socialmedia.url}
              />
            })
          ) : (
            <div></div>
          )}
        </motion.div>
      </div>
      {/* content others */}
      <div className='border border-blue-200 p-5 mb-5'>
        {/* title */}
        <div className='flex gap-2 items-center pb-5'>
          <p className='text-xl lg:text-2xl'> {titleOther} :</p>
        </div>
        {/* layout others */}
        <motion.div
          variants={otherVariants}
          initial="hidden"
          animate="show"
          className='flex flex-col justify-center px-5'
        >
          {dataOthers !== "Data not found" && dataOthers !== "Internal Server Error" ? (
            // loop data
            dataOthers.map((other: any, index: string) => {
              return <ListItemOther
                key={index}
                name={other.title}
                logo={dataListOther[other.codename].logo}
                url={dataListOther[other.codename].url}
              />
            })
          ) : (
            <div></div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
export default SectionAbout