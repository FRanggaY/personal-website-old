import React from 'react';
import { Metadata } from 'next';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
// utils
import { getData } from '@/utils/getData'
import { notFound } from 'next/navigation';
// import react icons
import { RiEyeFill, RiCodeBoxFill } from 'react-icons/ri'
// additional component
import FullscreenImage from '@/components/FullScreenImage';

export const metadata: Metadata = {
  title: 'Project Detail | ' + process.env.YOURNAME,
};

export default async function Page({ params: { lang, slug } }: any) {
  const langValue = packValueChecker(lang)

  // get project detail from api
  const projectDetailData = await getData(`projects/${slug}?lang=${langValue}`, false)
  const projectDetailValue = projectDetailData.data
  // handle data error
  if (projectDetailData.status != 200) {
    notFound()
  }

  return (
    <>
      <div className='md:px-48 px-4 pb-10 pt-28'>
        <div className='flex flex-wrap justify-center gap-5'>
          {/* left */}
          <div>
            {/* title */}
            <p className='text-3xl'>{projectDetailValue.name}</p>
            {/* date */}
            <span className='text-gray-400'>{projectDetailValue.createdAt} - {projectDetailValue.updatedAt}</span>
            {/* description */}
            <p className='text-xl'>{projectDetailValue.description}</p>
            {/* tags */}
            <p className='text-xl'>{projectDetailValue.tags}</p>
            <div>
              {/* platforms */}
              {projectDetailValue.platforms ? (
                projectDetailValue.platforms.map((projectPlatform: any, index: string) => {
                  return <div key={index} className='flex flex-wrap gap-5'>
                    {/* preview button */}
                    {projectPlatform.urlPreview && (
                      <a href={projectPlatform.urlPreview} target="_blank" className='hover:bg-gray-200 p-2'>
                        <RiEyeFill size={50} />
                      </a>
                    )}
                    {/* repo button */}
                    {projectPlatform.urlRepository && (
                      <a href={projectPlatform.urlRepository} target="_blank" className='hover:bg-gray-200 p-2'>
                        <RiCodeBoxFill size={50} />
                      </a>
                    )}
                  </div>
                })
              ) : (
                <div></div>
              )}
            </div>
          </div>
          {/* right */}
          <div>
            {/* thumbnail */}
            {projectDetailValue.image &&
              <FullscreenImage
                src={"/assets/image/projects/" + projectDetailValue.image}
                alt={projectDetailValue.name}
                width={500}
                height={100}
              />}
          </div>
        </div>
        {/* detail image */}
        {projectDetailValue.images.length != 0 ? (
          <div className='flex flex-col items-center justify-center gap-5 pt-5'>
            {/* detail */}
            <p className='text-2xl font-semibold'>Detail</p>
            <div className='flex flex-wrap justify-center gap-2'>
              {/* detail attachment image */}
              {projectDetailValue.images.map((projectImage: any, index: string) => {
                if (projectImage.attachment) {
                  return <div key={index}>
                    <FullscreenImage
                      src={"/assets/image/projects/" + projectImage.attachment}
                      alt={projectImage.name}
                      width={300}
                      height={100}
                    />
                  </div>
                }
              })}
            </div>
          </div>
        ) : (
          <div></div>
        )}

      </div>
    </>
  )
}