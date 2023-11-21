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
import siteMetadata from '@/utils/siteMetaData';

const seo_title = 'Home | ' + siteMetadata.title;
const seo_url =  process.env.SEO_URL;

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