import * as React from 'react';
import { LanguageParams } from '@/types/general';
import { dataLocale, validLocale } from '@/lib/locale';
import { Metadata } from 'next';
import siteMetadata from '@/lib/siteMetaData';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import HorizontalRule from '@/components/shared/horizontal-rule';
import { getPublicProfileEducations, getPublicProfileExperiences, getPublicProfileSkills } from '@/data/repository/public_profile';

import { PublicProfileEducation, PublicProfileExperience, PublicProfileSkill } from '@/types/public_profile';

import HeroGeneral from '@/components/shared/hero-general';

// skill
import { data as StaticSkillEn } from '@/data/static/en/public_profile_skill';
import { data as StaticSkillId } from '@/data/static/id/public_profile_skill';
import CardSkill from '@/components/layout/card/card-skill';

// experience
import { data as StaticExperienceEn } from '@/data/static/en/public_profile_experience';
import { data as StaticExperienceId } from '@/data/static/id/public_profile_experience';
import TimelineExperience from '@/components/layout/timeline/timeline-experience';

// education
import { data as StaticEducationEn } from '@/data/static/en/public_profile_education';
import { data as StaticEducationId } from '@/data/static/id/public_profile_education';
import TimelineEducation from '@/components/layout/timeline/timeline-education';
import SocialMedia from '@/components/shared/social-media';


export async function generateMetadata({ params }: { readonly params: LanguageParams }): Promise<Metadata> {
  const locale = validLocale(params.locale);
  return { 
    metadataBase: new URL(String(siteMetadata.appUrl + `/${locale}/about`)),
    title: {
      default: 'About',
      template: `%s - ${siteMetadata.author}`,
    },
    description: 'About for personal portfolio',

    openGraph: {
      locale: locale,
      type: "website",
      url: String(siteMetadata.appUrl + `/${locale}/about`),
      title: `About | ${siteMetadata.author}`,
      description: siteMetadata.description,
      images: [`${siteMetadata.appUrl}/assets/open-graph/landing.png`],
      siteName: siteMetadata.author,
    },

    twitter: {
      card: "summary_large_image",
      title: `About | ${siteMetadata.author}`,
      description: siteMetadata.description,
      images: [`${siteMetadata.appUrl}/assets/open-graph/landing.png`],
      creator: '@' + siteMetadata.author,
    },
  }
}

export default async function About({ params }: { readonly params: LanguageParams }) {
  const locale = validLocale(params.locale);
  const tNav = dataLocale[locale].navbar;
  const tBody = dataLocale[locale].about;

  const customParams = {
    offset: 1,
    size: 10,
  }

  let dataSkills = await getPublicProfileSkills(String(siteMetadata.apiUsername), locale, customParams)
  if (dataSkills.data.length === 0) { // get from static
    // check language 
    if (locale === 'id') {
      dataSkills = StaticSkillId
    } else {
      dataSkills = StaticSkillEn
    }
  }

  let dataExperiences = await getPublicProfileExperiences(String(siteMetadata.apiUsername), locale, {
    offset: 1,
    size: 10,
    sort_by: 'started_at',
    sort_order: 'desc'
  })
  if (dataExperiences.data.length === 0) { // get from static
    // check language 
    if (locale === 'id') {
      dataExperiences = StaticExperienceId
    } else {
      dataExperiences = StaticExperienceEn
    }
  }

  let dataEducations = await getPublicProfileEducations(String(siteMetadata.apiUsername), locale, {
    offset: 1,
    size: 10,
    sort_by: 'updated_at',
    sort_order: 'desc'
  })
  if (dataEducations.data.length === 0) { // get from static
    // check language 
    if (locale === 'id') {
      dataEducations = StaticEducationId
    } else {
      dataEducations = StaticEducationEn
    }
  }

  return (
    <div className='grid min-h-screen'>
      <Navbar
        titleHome={tNav.title.home}
        titleAbout={tNav.title.about}
        titleProjects={tNav.title.projects}
      />
      <main className='mt-24' >

        <HeroGeneral
          title={tBody.title.hero}
          description={tBody.description}
        />


        <div className='flex gap-4 flex-wrap justify-around mb-5'>

          {
            dataExperiences.data.length > 0 &&
            <div>
              <HorizontalRule title={tBody.title.experience} />
              <div className='flex flex-col justify-start items-start mx-5'>
                {
                  dataExperiences.data.map((item: PublicProfileExperience) => {
                    return <TimelineExperience
                      key={item.id}
                      companyName={item.company.name}
                      employeeType={item.employee_type}
                      locationType={item.location_type}
                      title={item.title}
                      description={item.description}
                      logoUrl={item.company.logo_url}
                      startedAt={item.started_at}
                      finishedAt={item.finished_at}
                      websiteUrl={item.company.website_url}
                      titleNow={tBody.now}
                    />
                  })
                }
              </div>
            </div>
          }

          {
            dataEducations.data.length > 0 &&
            <div>
              <HorizontalRule title={tBody.title.education} />
              <div className='flex flex-col justify-start items-start mx-5'>
                {
                  dataEducations.data.map((item: PublicProfileEducation) => {
                    return <TimelineEducation
                      key={item.id}
                      schoolName={item.school.name}
                      fieldOfStudy={item.field_of_study}
                      title={item.title}
                      description={item.description}
                      logoUrl={item.school.logo_url}
                      startedAt={item.started_at}
                      finishedAt={item.finished_at}
                      websiteUrl={item.school.website_url}
                      titleNow={tBody.now}
                    />
                  })
                }
              </div>
            </div>
          }

          {
            dataSkills.data.length > 0 &&
            <div>
              <HorizontalRule title={tBody.title.skill} />
              <div className='flex gap-5 justify-center flex-wrap items-center'>
                {
                  dataSkills.data.map((item: PublicProfileSkill) => {
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

        </div>

        <div className='my-5'>
          <HorizontalRule title={tBody.title.contact} />
          <div className='flex gap-5 justify-center flex-wrap items-center'>
            <SocialMedia />
          </div>
        </div>

      </main>
      <Footer
        titleHome={tNav.title.home}
        titleAbout={tNav.title.about}
        titleProjects={tNav.title.projects}
      />
    </div>
  );
}
