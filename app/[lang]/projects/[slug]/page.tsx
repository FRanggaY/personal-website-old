import React from 'react';
// import { Metadata } from 'next';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
// utils
import { getData } from '@/utils/getData'
import { notFound } from 'next/navigation';
// import react icons
import { RiEyeFill, RiCodeBoxFill } from 'react-icons/ri'
// additional component
import FullscreenImage from '@/components/FullScreenImage';

interface ProjectDetailProps {
  projectDetailValue: any;
}

function ProjectDetail({ projectDetailValue }: ProjectDetailProps) {
  return (
    <div>
      <p className='text-3xl'>{projectDetailValue.name}</p>
      <span className='text-gray-400'>{projectDetailValue.projectCreated} - {projectDetailValue.projectUpdated}</span>
      <p className='text-xl'>{projectDetailValue.description}</p>
      <p className='text-xl'>{projectDetailValue.tags}</p>
      <div className='flex flex-wrap gap-5'>
        {projectDetailValue.urlPreview && (
          <a href={projectDetailValue.urlPreview} target="_blank" className='hover:bg-gray-200 p-2'>
            <RiEyeFill size={50} />
          </a>
        )}
        {projectDetailValue.urlRepository && (
          <a href={projectDetailValue.urlRepository} target="_blank" className='hover:bg-gray-200 p-2'>
            <RiCodeBoxFill size={50} />
          </a>
        )}
      </div>
    </div>
  )
}

interface ProjectImagesProps {
  images: any;
}

function ProjectImages({ images }: ProjectImagesProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-5 pt-5'>
      <p className='text-2xl font-semibold'>Detail</p>
      <div className='flex flex-wrap justify-center gap-2'>
        {images.map((item: any, index: string) => {
          if (item.attachment) {
            return (
              <div key={index}>
                <FullscreenImage
                  src={"/assets/image/projects/" + item.attachment}
                  alt={item.name}
                  width={300}
                  height={100}
                />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

// export async function generateMetadata({ params: { lang, slug } }:any): Promise<Metadata> {
//   const langValue = packValueChecker(lang)
//   // get project detail from api
//   const projectDetailData = await getData(`projects/${slug}?lang=${langValue}`, false)
//   const projectDetailValue = projectDetailData.data

//   const seo_title = projectDetailValue.name + ' | ' + process.env.YOURNAME;
//   const seo_description = projectDetailValue.description || '';
//   const seo_site = process.env.SEO_URL + "/projects/" + projectDetailValue.slug
//   const seo_image = process.env.SEO_URL_ASSET + "/assets/image/projects/" + projectDetailValue.image
//   const seo_icon = '/assets/image/my-logo.png'

//   return { 
//     title: seo_title,
//     description: seo_description,
//     openGraph: {
//       title: seo_title,
//       description: seo_description,
//       url:  seo_site,
//       siteName: seo_title,
//       type: 'website',
//       images: seo_image
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: seo_title,
//       description: seo_description,
//       site: '@' + process.env.SEO_CREATOR,
//       creator: '@' + process.env.SEO_CREATOR,
//       images: seo_image
//     },
//     viewport: {
//       width: 'device-width',
//       initialScale: 1,
//       maximumScale: 1,
//     },
//     icons: {
//       icon: seo_icon,
//       shortcut: seo_icon,
//       apple: seo_icon,
//       other: {
//         rel: 'apple-touch-icon-precomposed',
//         url: seo_icon,
//       },
//     },
//     robots: {
//       index: false,
//       follow: true,
//       nocache: true,
//       googleBot: {
//         index: true,
//         follow: false,
//         noimageindex: true,
//         'max-video-preview': -1,
//         'max-image-preview': 'large',
//         'max-snippet': -1,
//       },
//     },
//   }
// }

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
    <>
      <div className='md:px-48 px-4 pb-10 pt-28'>
        <div className='flex flex-wrap justify-center gap-5'>
          {/* left */}
          <ProjectDetail projectDetailValue={projectDetailValue} />
          {/* right */}
          <div>
            {/* thumbnail */}
            {projectDetailValue.image &&
              <FullscreenImage
                src={"/assets/image/projects/" + projectDetailValue.image}
                alt={projectDetailValue.name}
                width={500}
                height={100}
              />}
          </div>
        </div>
        {/* detail image */}
        {projectDetailValue.images.length != 0 ? (
          <ProjectImages images={projectDetailValue.images} />
        ) : (
          <div></div>
        )}

      </div>
    </>
  )
}