import React from 'react';
import { Metadata } from 'next';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
import { locales } from '@/data/dataTranslation'
// additional component
import SectionSkills from './sectionSkills'
// utils
import { getData } from '@/utils/getData'

export const metadata: Metadata = {
  title: 'Skills | ' + process.env.YOURNAME,
};

export default async function Page({ params: { lang } }: any) {
  const langValue = packValueChecker(lang)
  const titleSkill = locales[langValue].skills
  // get skills tech from api
  const skillTechData = await getData(`skills/tech?lang=${langValue}`, false)
  const skillTechValues = skillTechData.data
  // get languages from api
  const skillLanguageData = await getData(`languages`, false)
  const skillLanguageValues = skillLanguageData.data
  
  return (
    <>
      <div className='md:px-48 px-4 pb-10 pt-28'>
        {/* Section */}
        <SectionSkills
          title={titleSkill.title}
          titleTechnology={titleSkill.titleTechnology}
          titleLanguage={titleSkill.titleLanguage}
          dataSkillTechs={skillTechValues}
          dataLanguages={skillLanguageValues}
          comingSoonTitle={titleSkill.titleComingSoon.title}
          comingSoonNote={titleSkill.titleComingSoon.note}
        />
      </div>
    </>
  )
}