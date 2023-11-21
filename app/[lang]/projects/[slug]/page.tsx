import React from 'react';
import { Metadata } from 'next';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
// utils
import { getData } from '@/utils/getData'
import { notFound } from 'next/navigation';
// additional component
import SectionProjectDetail from './sectionProjectDetail';
import siteMetadata from '@/utils/siteMetaData';

export async function generateMetadata({ params: { lang, slug } }:any): Promise<Metadata> {
  const langValue = packValueChecker(lang)
  // get project detail from api
  const projectDetailData = await getData(`projects/${slug}?lang=${langValue}`, false)
  const projectDetailValue = projectDetailData.data

  const seo_title = projectDetailValue.name + ' | ' + process.env.YOURNAME;
  const seo_description = projectDetailValue.description || '';
  const seo_site = process.env.SEO_URL + "/projects/" + projectDetailValue.slug
  const seo_image = projectDetailValue.image.includes('http') ? projectDetailValue.image : process.env.SEO_URL_ASSET + "/assets/image/projects/" + projectDetailValue.image
  const seo_icon = '/assets/image/my-logo.png'

  const publishedAt = projectDetailValue.projectCreated;
  const modifiedAt = projectDetailValue.projectUpdated;

  const authors = projectDetailValue?.author ? [projectDetailValue.author] : siteMetadata.author;

  return { 
    metadataBase: new URL(seo_site ?? ''),
    title: seo_title,
    description: seo_description,
    openGraph: {
      title: seo_title,
      description: seo_description,
      url:  seo_site,
      locale: lang,
      siteName: seo_title,
      type: "article",
      images: seo_image,
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      authors: authors ?? [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo_title,
      description: seo_description,
      site: '@' + process.env.SEO_CREATOR,
      creator: '@' + process.env.SEO_CREATOR,
      images: seo_image
    },
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
      },
    },
  }
}

export default async function Page({ params: { lang, slug } }: any) {
  const langValue = packValueChecker(lang)

  // get project detail from api
  const projectDetailData = await getData(`projects/${slug}?lang=${langValue}`, false)
  const projectDetailValue = projectDetailData.data
  // handle data error
  if (projectDetailData.status != 200) {
    notFound()
  }

  return (
    <SectionProjectDetail data={projectDetailValue} />
  )
}