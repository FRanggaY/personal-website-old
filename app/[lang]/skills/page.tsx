import React from 'react';
import { Metadata } from 'next';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
import { locales } from '@/data/dataTranslation'
// additional component
import SectionSkills from './sectionSkills'
// utils
import { getData } from '@/utils/getData'

// const seo_title = 'Skills | ' + process.env.YOURNAME;
// const seo_description = 'This is skills page';
// const seo_icon = '/assets/image/my-logo.png'

// export const metadata: Metadata = {
//   viewport: {
//     width: 'device-width',
//     initialScale: 1,
//     maximumScale: 1,
//   },
//   title: seo_title,
//   icons: {
//     icon: seo_icon,
//     shortcut: seo_icon,
//     apple: seo_icon,
//     other: {
//       rel: 'apple-touch-icon-precomposed',
//       url: seo_icon,
//     },
//   },
//   robots: {
//     index: false,
//     follow: true,
//     nocache: true,
//     googleBot: {
//       index: true,
//       follow: false,
//       noimageindex: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   openGraph: {
//     title: seo_title,
//     description: seo_description,
//     url:  process.env.SEO_URL + "/skills",
//     siteName: seo_title,
//     locale: process.env.SEO_LOCALE,
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: seo_title,
//     description: seo_description,
//     site: '@' + process.env.SEO_CREATOR,
//     creator: '@' + process.env.SEO_CREATOR
//   },
// };

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