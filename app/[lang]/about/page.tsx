import React from 'react';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
import { locales } from '@/data/dataTranslation'
// additional component
import SectionAbout from './sectionAbout'
// utils
import { getData } from '@/utils/getData'
import siteMetadata from '@/utils/siteMetaData';

const my_cv = process.env.YOURURLCV ?? ''
const my_certificate = process.env.YOURURLCERTIFICATE ?? ''

const seo_title = 'About | ' + siteMetadata.title;
const seo_url =  process.env.SEO_URL + "/about";

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