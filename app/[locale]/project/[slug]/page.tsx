import * as React from 'react';
import { ProjectDetailParams } from '@/types/general';
import { dataLocale, validLocale } from '@/lib/locale';
import { Metadata } from 'next';
import siteMetadata from '@/lib/siteMetaData';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';

import HorizontalRule from '@/components/shared/horizontal-rule';
import CardSkill from '@/components/layout/card/card-skill';
import Image from 'next/image';

import { getPublicProfileProjectDetail } from '@/data/repository/public-profile-repository';

import { PublicProfileProjectAttachment, PublicProfileProjectDetail, PublicProfileSkill, ResponsePublicProfileProject } from '@/types/public-profile';
import HeroGeneral from '@/components/shared/hero-general';

// project
import { data as StaticProjectEn } from '@/data/static/en/public-profile-project';
import { data as StaticProjectId } from '@/data/static/id/public-profile-project';
import ImagePreviewProject from '@/components/layout/image-preview/image-preview-project';
import ImagePreviewProjectAttachmentList from '@/components/layout/image-preview/image-preview-project-attachment-list';

export async function generateMetadata({ params }: { readonly params: ProjectDetailParams }): Promise<Metadata> {
  const locale = validLocale(params.locale);

  // get project detail from api
  let dataProject: ResponsePublicProfileProject = await getPublicProfileProjectDetail(String(siteMetadata.apiUsername), locale, params.slug)
  let dataProjectDetail: Partial<PublicProfileProjectDetail> = {};
  if (Object.keys(dataProject.data).length == 0) { // get from static
    // check language 
    if (locale === 'id') {
      const foundProject = StaticProjectId.data.find((item) => item.slug === params.slug);
      if (foundProject) {
        dataProjectDetail = {
          ...foundProject,
          description: foundProject.description ?? '',
          image_url: foundProject.image_url ?? '',
          logo_url: foundProject.logo_url ?? '',
        };
      }
    } else {
      const foundProject = StaticProjectEn.data.find((item) => item.slug === params.slug);
      if (foundProject) {
        dataProjectDetail = {
          ...foundProject,
          description: foundProject.description ?? '',
          image_url: foundProject.image_url ?? '',
          logo_url: foundProject.logo_url ?? '',
        };
      }
    }
  } else {
    dataProjectDetail = dataProject.data;
  }

  return { 
    metadataBase: new URL(String(siteMetadata.appUrl + `/${locale}/project/${params.slug}`)),
    title: {
      default: String(dataProjectDetail.title),
      template: `%s | ${siteMetadata.author}`,
    },
    description: String(dataProjectDetail.description),

    authors: [
      {
        name: siteMetadata.author,
        url: siteMetadata.socialMedia.github,
      },
    ],
    creator: siteMetadata.author,

    openGraph: {
      title: `${String(dataProjectDetail.title)} | ${siteMetadata.author}`,
      description: String(dataProjectDetail.description),
      url:  String(siteMetadata.appUrl + `/${locale}/project/${params.slug}`),
      locale: locale,
      siteName: siteMetadata.author,
      type: "article",
      images: [`${siteMetadata.apiUrl + '/' + dataProjectDetail.image_url }`],
      publishedTime: dataProjectDetail.created_at,
      modifiedTime: dataProjectDetail.updated_at,
      authors: [String(siteMetadata.author)],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${String(dataProjectDetail.title)} | ${siteMetadata.author}`,
      description: String(dataProjectDetail.description),
      site: '@' + siteMetadata.author,
      creator: '@' + siteMetadata.author,
      images: [`${siteMetadata.apiUrl + '/' + dataProjectDetail.image_url }`],
    },
    icons: {
      icon: "/favicon.ico",
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

export default async function ProjectDetail({ params }: { readonly params: ProjectDetailParams }) {
  const locale = validLocale(params.locale);
  const tNav = dataLocale[locale].navbar;
  const tBody = dataLocale[locale].project;

  let dataProject: ResponsePublicProfileProject = await getPublicProfileProjectDetail(String(siteMetadata.apiUsername), locale, params.slug)
  let dataProjectDetail: Partial<PublicProfileProjectDetail> = {};
  let dataProjectDetailAttachmentFile: PublicProfileProjectAttachment[] = [];
  let dataProjectDetailAttachmentImage: PublicProfileProjectAttachment[] = [];
  if (Object.keys(dataProject.data).length == 0) { // get from static
    // check language 
    if (locale === 'id') {
      const foundProject = StaticProjectId.data.find((item) => item.slug === params.slug);
      if (foundProject) {
        dataProjectDetail = {
          ...foundProject,
          description: foundProject.description ?? '',
          image_url: foundProject.image_url ?? '',
          logo_url: foundProject.logo_url ?? '',
        };
      }
    } else {
      const foundProject = StaticProjectEn.data.find((item) => item.slug === params.slug);
      if (foundProject) {
        dataProjectDetail = {
          ...foundProject,
          description: foundProject.description ?? '',
          image_url: foundProject.image_url ?? '',
          logo_url: foundProject.logo_url ?? '',
        };
      }
    }
  } else {
    dataProjectDetail = dataProject.data;
    dataProjectDetailAttachmentFile = dataProject.data.attachments.filter((item) => item.category === 'file')
    dataProjectDetailAttachmentImage = dataProject.data.attachments.filter((item) => item.category === 'image')
  }

  if (Object.keys(dataProjectDetail).length == 0) {
    return <></>
  }

  return (
    <div className='grid min-h-screen'>
      <Navbar
        titleHome={tNav.title.home}
        titleAbout={tNav.title.about}
        titleProjects={tNav.title.projects}
      />
      <main className='my-24' >

        <div className='flex items-center flex-col'>

          {dataProjectDetail.logo_url && <Image
            priority
            src={siteMetadata.apiUrl + '/' + dataProjectDetail.logo_url}
            width={60}
            height={60}
            alt={'logo project'}
          />}

          <HeroGeneral
            title={dataProjectDetail.title ?? ''}
            description={dataProjectDetail.description ?? ''}
          />

          <ImagePreviewProject
            dataProjectDetail={dataProjectDetail}
          />

          {
            dataProjectDetailAttachmentFile.length > 0 &&
            <div>
              <HorizontalRule title={tBody.title.stack} />
              <div className='flex gap-5 justify-center flex-wrap items-center'>
                {
                  dataProjectDetailAttachmentFile.map((item: PublicProfileProjectAttachment) => {
                    return <CardSkill
                      key={item.id}
                      name={item.title}
                      description={item.description}
                      logoUrl={item.image_url}
                      websiteUrl={item.website_url}
                    />
                  })
                }
              </div>
            </div>
          }

        </div>

        <ImagePreviewProjectAttachmentList 
          title={tBody.title.preview}
          dataProjectDetailAttachmentImage={dataProjectDetailAttachmentImage}
        />

        {
          dataProjectDetail.skills && dataProjectDetail.skills.length > 0 &&
          <div>
            <HorizontalRule title={tBody.title.stack} />
            <div className='flex gap-5 justify-center flex-wrap items-center'>
              {
                dataProjectDetail.skills.map((item: PublicProfileSkill) => {
                  return <CardSkill
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    logoUrl={item.logo_url}
                    websiteUrl={item.website_url}
                  />
                })
              }
            </div>
          </div>
        }

      </main>
      <Footer
        titleHome={tNav.title.home}
        titleAbout={tNav.title.about}
        titleProjects={tNav.title.projects}
        copyright={tNav.title.copyright}
      />
    </div>
  );
}
