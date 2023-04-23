"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
// additional components
import PaginationRequestParam from '@/components/PaginationRequestParam';
// utils
import { getData } from '@/utils/getData'

// button item project props
interface ProjectPlatformProps {
  title: string,
  logoUrl: string,
  url: string,
}
// list item project props
interface ProjectProps {
  projectUpdated: string,
  title: string,
  image?: string,
  url: string,
}

// list item project platform
const ButtonItemProjectPlatform = ({ title, logoUrl, url }: ProjectPlatformProps) => {
  return <a href={url} className='flex flex-row gap-2 justify-end items-center p-2 border-2 rounded-lg hover:border-blue-400'>
    {/* platform image */}
    <Image src={logoUrl} alt={title} width={20} height={20} style={{ width: '100%', height: 'auto' }} />
    {/* platform title */}
    <h2 className='font-semibold'>{title.toUpperCase()}</h2>
  </a>
}

// const list item project
const ListItemProject = ({ projectUpdated, title, image, url }: ProjectProps) => {
  return <a href={url} target='_blank' className='flex flex-col gap-2 items-center p-2 border-2 rounded-lg hover:border-blue-400' >
    {/* project image */}
    {image && <Image src={"/assets/image/projects/" + image} alt={title} width={200} height={200} style={{ width: '100%', height: '150px' }} priority={true} />}
    {/* project title */}
    <h2 className='font-semibold'>{title.toUpperCase()}</h2>
    {/* project date */}
    <span className='text-gray-400'>{projectUpdated}</span>
  </a>
}

function SectionProjects({ title, datas, langFormat, titleNotFound }: any) {
  // initial
  const searchParams = useSearchParams();
  let platform: any = '';
  let page: any = '';
  if (searchParams) {
    platform = searchParams.get('platform');
    page = searchParams.get('page');
  }
  const [dataProject, setDataProject]: any = useState();

  // set up active param
  let urlParams = new URLSearchParams();
  urlParams.append('lang', langFormat);
  if (platform) urlParams.append('platform', platform);
  if (page) urlParams.append('page', String(page));

  // get data projects
  const fetchDataProjects = async () => {
    const data = await getData(`projects?${urlParams.toString()}`, false);
    setDataProject(data.data);
  };
  // set data projects
  useEffect(() => {
    fetchDataProjects();
  }, []);

  if (!dataProject) {
    return null
  }

  const pageChange = (pageNumber: string) => {
    urlParams.delete('page');
    urlParams.delete('lang');
    urlParams.append('page', pageNumber);
    return `projects?${urlParams.toString()}`
  }

  return (
    <div className='flex items-center justify-center flex-col gap-3'>
      {/* title */}
      <h2 className='text-3xl lg:text-4xl font-semibold'>{title} {platform}</h2>
      {/* layout project platform */}
      <div className='pt-8 flex gap-5 flex-wrap justify-center'>
        <a href={"projects"} className='flex flex-row gap-2 p-2 justify-end items-center border-2 rounded-lg hover:border-blue-400'>
          {/* platform title */}
          <h2 className='font-semibold'>ALL</h2>
        </a>
        {/* loop data */}
        {datas.map((data: any, index: string) => {
          return <ButtonItemProjectPlatform
            key={index}
            title={data.title}
            logoUrl={data.logo}
            url={data.url}
          />
        })}
      </div>
      {/* card project */}
      <div className='pt-8'>
        {dataProject !== "Data not found" && dataProject !== "Internal Server Error" ? (
          <>
            <div className='flex gap-3 flex-wrap justify-center'>
              {dataProject.projects.map((project: any, index: string) => {
                return <ListItemProject
                  key={index}
                  title={project.name}
                  projectUpdated={project.projectUpdated}
                  url={"projects/" + project.slug}
                  image={project.image}
                />
              })}
            </div>
            <PaginationRequestParam
              currentPage={dataProject.total.currentPage}
              totalPages={dataProject.total.totalPages}
              pageChange={pageChange}
            />
          </>
        ) : (
          <p className='text-2xl'>{titleNotFound}</p>
        )}
      </div>
    </div>
  )
}
export default SectionProjects