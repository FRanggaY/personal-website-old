import React from 'react';
import { Metadata } from 'next';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
import { locales } from '@/data/dataTranslation'
import SectionProjects from './sectionProjects';
// utils
// import { getData } from '@/utils/getData'
import platformData from '@/data/json/platformData.json'

export const metadata: Metadata = {
  title: 'Project | ' + process.env.YOURNAME,
};

export default async function Page({ params: { lang } }: any) {
  const langValue = packValueChecker(lang)
  const titleProject = locales[langValue].projects

  return (
    <>
      <div className='md:px-48 px-4 pb-10 pt-28'>
        <SectionProjects 
          title={titleProject.title} 
          datas={platformData}
          langFormat={langValue}
          titleNotFound={titleProject.titleNotFound}
         />
      </div>
    </>
  )
}