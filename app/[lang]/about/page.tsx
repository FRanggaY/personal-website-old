import React from 'react';
import { Metadata } from 'next';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
import { locales } from '@/data/dataTranslation'
// additional component
import SectionAbout from './sectionAbout'
// utils
import { getData } from '@/utils/getData'

export const metadata: Metadata = {
  title: 'About | ' + process.env.YOURNAME,
};

export default async function Page({ params: { lang } }: any) {
  const langValue = packValueChecker(lang)
  const titleAbout = locales[langValue].about
  // get social media from api
  const profileData = await getData(`profile`, false)
  const profileValue = profileData.data
  // get experiences from api
  const experienceData = await getData(`experiences?lang=${langValue}`, false)
  const experienceValues = experienceData.data
  // get educations from api
  const educationData = await getData(`educations?lang=${langValue}`, false)
  const educationValues = educationData.data
  
  return (
    <>
      <div className='md:px-48 px-4 pb-10 pt-28'>
        {/* Section */}
        <SectionAbout
          title={titleAbout.title}
          profileName={profileValue.name}
          profilePositions={profileValue.position}
          titleSocialMedia={titleAbout.titleSocialMedia}
          dataSocialMedias={profileValue.socialMedia}
          titleExperience={titleAbout.titleExperience}
          dataExperiences={experienceValues}
          titleEducation={titleAbout.titleEducation}
          dataEducations={educationValues}
          titleOther={titleAbout.titleOther}
          dataOthers={titleAbout.dataOthers}
        />
      </div>
    </>
  )
}