import React from 'react';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
import { locales } from '@/data/dataTranslation'
// additional component
import SectionSkills from './sectionSkills'
// utils
import { getData } from '@/utils/getData'
import siteMetadata from '@/utils/siteMetaData';

const seo_title = 'Skills | ' + siteMetadata.title;
const seo_url =  process.env.SEO_URL + "/skills";

export const metadata = {
  metadataBase: new URL(seo_url ?? ''),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: seo_title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: seo_title,
    description: siteMetadata.description,
    url:  seo_url,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: siteMetadata.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: seo_title,
    images: [siteMetadata.socialBanner],
  },
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