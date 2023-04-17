import React from 'react';
import { Metadata } from 'next';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
import { locales } from '@/data/dataTranslation'
// additional component
import SectionServices from './sectionServices';
// utils
import { getData } from '@/utils/getData'

export const metadata: Metadata = {
  title: 'Service | ' + process.env.YOURNAME,
};

export default async function Page({ params: { lang } }: any) {
  const langValue = packValueChecker(lang)
  const titleService = locales[langValue].service
  // get skills solution from api
  const skillSolutionData = await getData(`skills?lang=${langValue}&category=solution`, false)
  const skillSolutionValues = skillSolutionData.data
  
  return (
    <>
      <div className='md:px-48 px-4 pb-10 pt-28'>
        {/* Section */}
        <SectionServices
          title={titleService.title}
          titleSolution={titleService.titleSolution}
          dataSkillSolutions={skillSolutionValues}
          comingSoonTitle={titleService.titleComingSoon}
        />

      </div>
    </>
  )
}