import React from 'react';
import { Metadata } from 'next';
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

const seo_title = 'Home | ' + process.env.YOURNAME;
const seo_description = 'This is home page';
const seo_icon = '/assets/image/my-logo.png'

export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  title: seo_title,
  description: seo_description,
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
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: seo_title,
    description: seo_description,
    url:  process.env.SEO_URL,
    siteName: process.env.SEO_SITE_NAME,
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