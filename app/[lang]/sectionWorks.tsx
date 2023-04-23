import Image from 'next/image'
import React from 'react'

// props
interface Props {
  langUrl: string,
  title: string,
  logoUrl: string,
  url: string,
}

// list item project platform
const ListItemProjectPlatform = ({ langUrl, title, logoUrl, url }: Props) => {
  return <a href={langUrl + "/" + url} className='flex flex-col gap-10 justify-end items-center px-20 py-10 border-2 rounded-lg hover:border-blue-400'>
    {/* platform image */}
    <Image src={logoUrl} alt={title} width={80} height={80} style={{ width: '100%', height: 'auto' }} />
    {/* platform title */}
    <h2 className='font-semibold'>{title.toUpperCase()}</h2>
  </a>
}

function SectionWorks({ title, datas, langUrl }: any) {
  return (
    <div className='flex items-center justify-center flex-col gap-3'>
      {/* title */}
      <h2 className='text-3xl lg:text-4xl font-semibold'>{title}</h2>
      {/* layout project platform */}
      <div className='pt-8 flex gap-5 flex-wrap justify-center'>
        {/* loop data */}
        {datas.map((data: any, index: string) => {
          return <ListItemProjectPlatform
            key={index}
            langUrl={langUrl}
            title={data.title}
            logoUrl={data.logo}
            url={data.url}
          />
        })}
      </div>
    </div>
  )
}
export default SectionWorks