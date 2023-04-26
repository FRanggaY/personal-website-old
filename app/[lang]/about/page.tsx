import React from 'react';
import { Metadata } from 'next';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
import { locales } from '@/data/dataTranslation'
// additional component
import SectionAbout from './sectionAbout'
// utils
import { getData } from '@/utils/getData'

const seo_title = 'About | ' + process.env.YOURNAME;
const seo_description = 'This is about page';
const seo_icon = '/assets/image/my-logo.png'
const my_cv = process.env.YOURURLCV ?? ''
const my_certificate = process.env.YOURURLCERTIFICATE ?? ''

export const metadata: Metadata = {
  title: seo_title,
  icons: {
    icon: seo_icon,
    shortcut: seo_icon,
    apple: seo_icon,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: seo_icon,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: seo_title,
    description: seo_description,
    url:  process.env.SEO_URL + "/about",
    siteName: seo_title,
    locale: process.env.SEO_LOCALE,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seo_title,
    description: seo_description,
    site: '@' + process.env.SEO_CREATOR,
    creator: '@' + process.env.SEO_CREATOR
  },
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
          urlCV={my_cv}
          urlCertificate={my_certificate}
        />
      </div>
    </>
  )
}