import React from 'react';
import { Metadata } from 'next';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
import { locales } from '@/data/dataTranslation'
import SectionProjects from './sectionProjects';
// json
import projectPlatforms from '@/data/locales/en_US/json/projectPlatforms.json'

const seo_title = 'Projects | ' + process.env.YOURNAME;
const seo_description = 'This is projects page';
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
    url:  process.env.SEO_URL + "/projects",
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
  const titleProject = locales[langValue].projects

  return (
    <>
      <div className='md:px-48 px-4 pb-10 pt-28'>
        <SectionProjects 
          title={titleProject.title} 
          datas={projectPlatforms.project_platforms}
          langFormat={langValue}
          titleNotFound={titleProject.titleNotFound}
         />
      </div>
    </>
  )
}