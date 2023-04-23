import React from 'react';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
import { locales } from '@/data/dataTranslation'
// additional component
import Hero from '@/components/Hero'
import SectionWorks from './sectionWorks'
// utils
import { getData } from '@/utils/getData'
// json
import projectPlatforms from '@/data/locales/en_US/json/projectPlatforms.json'

export default async function Page({ params: { lang } }: any) {
  // get title from data
  const langValue = packValueChecker(lang)
  const titleLanding = locales[langValue].landing
  // get profile from api
  const profileData = await getData('profile', false)
  const profileValue = profileData.data

  return (
    <>
      {/* Component Hero */}
      <Hero
        greeting={titleLanding.greeting}
        name={profileValue.name}
        positions={profileValue.position}
        greetingNote={titleLanding.greetingNote}
      />
      <div className='md:px-48 px-4 py-10'>
        {/* Section Hero */}
        <SectionWorks
          title={titleLanding.sectionTitle}
          datas={projectPlatforms.project_platforms}
          langUrl={lang}
        />
      </div>
    </>
  )
}