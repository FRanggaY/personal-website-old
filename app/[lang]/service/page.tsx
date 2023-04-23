import React from 'react';
import { Metadata } from 'next';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
import { locales } from '@/data/dataTranslation'
// additional component
import SectionServices from './sectionServices';
// utils
import { getData } from '@/utils/getData'

const seo_title = 'Service | ' + process.env.YOURNAME;
const seo_description = 'This is service page';
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
    url:  process.env.SEO_URL + "/service",
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
  const titleService = locales[langValue].service
  // get skills solution from api
  const skillSolutionData = await getData(`skills/solution?lang=${langValue}`, false)
  const skillSolutionValues = skillSolutionData.data
  
  return (
    <>
      <div className='md:px-48 px-4 pb-10 pt-28'>
        {/* Section */}
        <SectionServices
          title={titleService.title}
          titleSolution={titleService.titleSolution}
          dataSkillSolutions={skillSolutionValues}
          comingSoonTitle={titleService.titleComingSoon}
        />
      </div>
    </>
  )
}