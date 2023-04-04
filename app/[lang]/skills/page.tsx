import React from 'react';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
import { locales } from '@/data/dataTranslation'
// additional component
import SectionSkills from './sectionSkills'
// utils
import { getData } from '@/utils/getData'

export default async function Page({ params: { lang } }: any) {
  const langValue = packValueChecker(lang)
  const titleSkill = locales[langValue].skills
  // get skills tech from api
  const skillTechData = await getData(`skills?lang=${langValue}`, false)
  const skillTechValues = skillTechData.data
  // get skills solution from api
  const skillSolutionData = await getData(`skills?lang=${langValue}&category=solution`, false)
  const skillSolutionValues = skillSolutionData.data
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
          titleSolution={titleSkill.titleSolution}
          titleLanguage={titleSkill.titleLanguage}
          dataSkillTechs={skillTechValues}
          dataSkillSolutions={skillSolutionValues}
          dataLanguages={skillLanguageValues}
          comingSoonTitle={titleSkill.titleComingSoon.title}
          comingSoonNote={titleSkill.titleComingSoon.note}
        />
      </div>
    </>
  )
}