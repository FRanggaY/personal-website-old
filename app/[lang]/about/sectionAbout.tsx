import Image from 'next/image'
import React from 'react'
// logo from react icons
import { RiProfileFill, RiShieldStarFill, RiMapPinUserFill, RiBriefcase4Fill } from 'react-icons/ri'

// about social media props
interface AboutSocialMediaProps {
  name: string,
  description?: string,
  logoUrl: string,
  url?: string,
  username?: string,
}

// about other props
interface AboutOtherProps {
  name: string,
  logo: any,
  url: string,
}

// list item about social media
const ListItemAboutSocialMedia = ({ name, description, logoUrl, url, username }: AboutSocialMediaProps) => {
  return <a href={url} target="_blank" className='p-5 flex items-center card-skill-hover gap-2'>
    {/* image */}
    <Image src={logoUrl} alt={name} width={40} height={40} style={{ width: 'auto', height: 'auto' }} />
    <div>
      {/* title */}
      <p className='text-xl font-semibold'>{ username ?? name }</p>
      {/* description */}
      <p>{description}</p>
    </div>
  </a>
}

// list item about other
const ListItemAboutOther = ({ name, logo, url }: AboutOtherProps) => {
  return <a href={url} target="_blank" className='p-5 flex items-center card-skill-hover gap-2'>
    {/* logo */}
    {logo}
    <div>
      {/* title */}
      <p className='text-xl font-semibold'>{ name  }</p>
    </div>
  </a>
}

// data list other
const dataListOther :any = {
  'cv' : {
    'logo' : <RiProfileFill size={50} />,
    'url' : process.env.YOURURLCV,
  },
  'certificate' : {
    'logo' : <RiShieldStarFill size={50} />,
    'url' : process.env.YOURURLCERTIFICATE,
  },
}

function SectionAbout({ title, profileName, profilePositions, titleSocialMedia, dataSocialMedias, titleOther, dataOthers}: any) {
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
            <span key={index}>{item}{index !== profilePositions.length - 1 && <span>, </span> } </span>
          ))}
        </p>
      </div>
      {/* content social media */}
      <div className='border border-blue-200 p-5 mb-5'>
        {/* title */}
        <div className='flex gap-2 items-center pb-5'>
          <p className='text-xl lg:text-2xl'> {titleSocialMedia} :</p>
        </div>
        {/* layout social media */}
        <div className='flex flex-wrap justify-center'>
          {dataSocialMedias !== "Data not found" && dataSocialMedias !== "Internal Server Error" ? (
            // loop data
            dataSocialMedias.map((socialmedia: any, index: string) => {
              return <ListItemAboutSocialMedia
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
        </div>
      </div>
      {/* content others */}
      <div className='border border-blue-200 p-5 mb-5'>
        {/* title */}
        <div className='flex gap-2 items-center pb-5'>
          <p className='text-xl lg:text-2xl'> {titleOther} :</p>
        </div>
        {/* layout others */}
        <div className='flex flex-col justify-center px-5'>
          {dataOthers !== "Data not found" && dataOthers !== "Internal Server Error" ? (
            // loop data
            dataOthers.map((other: any, index: string) => {
              return <ListItemAboutOther
                key={index}
                name={other.title}
                logo={dataListOther[other.codename].logo}
                url={dataListOther[other.codename].url}
              />
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  )
}
export default SectionAbout