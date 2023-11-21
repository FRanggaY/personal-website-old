import React from 'react';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
import { locales } from '@/data/dataTranslation'
// additional component
import SectionServices from './sectionServices';
// utils
import { getData } from '@/utils/getData'
import siteMetadata from '@/utils/siteMetaData';

const seo_title = 'Service | ' + siteMetadata.title;
const seo_url =  process.env.SEO_URL + "/service";

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