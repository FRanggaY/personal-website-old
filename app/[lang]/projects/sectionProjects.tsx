"use client"
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation';
// framer motion
import { motion } from "framer-motion"
// additional components
import PaginationRequestParam from '@/components/PaginationRequestParam';
import { projectPlatformVariants, projectPlatformAnimate, ListItemProjectPlatform, ListItemProject } from '@/components/Card/CardProject'
// utils
import { getData } from '@/utils/getData'

// props
interface Props {
  title: string,
  datas: any,
  langFormat: string,
  titleNotFound: string,
}

function SectionProjects({ title, datas, langFormat, titleNotFound }: Props) {
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
      <motion.div 
        variants={projectPlatformVariants}
        initial="hidden"
        animate="show"
        className='pt-8 flex gap-5 flex-wrap justify-center'
      >
        <motion.a 
          href={"projects"} 
          variants={projectPlatformAnimate} 
          className='flex flex-row gap-2 p-2 justify-end items-center border-2 rounded-lg hover:border-blue-400'
        >
          {/* platform title */}
          <h2 className='font-semibold'>ALL</h2>
        </motion.a>
        {/* loop data */}
        {datas.map((data: any, index: string) => {
          return <ListItemProjectPlatform key={index}
            title={data.title}
            logoUrl={data.logo}
            url={data.url}
            additionalClass='flex-row gap-2 p-2'
            width={20}
            height={20}
          />
        })}
      </motion.div>
      {/* card project */}
      <div className='pt-8'>
        {dataProject !== "Data not found" && dataProject !== "Internal Server Error" ? (
          <>
            <div className='flex gap-3 flex-wrap justify-center'>
              {dataProject.projects.map((project: any, index: string) => {
                return <ListItemProject key={index}
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