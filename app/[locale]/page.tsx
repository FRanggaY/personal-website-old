import * as React from 'react';
import { LanguageParams } from '@/types/general';
import { dataLocale, validLocale } from '@/lib/locale';
import { Metadata } from 'next';
import siteMetadata from '@/lib/siteMetaData';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import HeroProfile from '@/components/layout/hero/hero-profile';
import HorizontalRule from '@/components/shared/horizontal-rule';
import { getPublicProfileSkills, getPublicProfileSolutions } from '@/data/repository/public_profile';

import { PublicProfileSolution, PublicProfileSkill } from '@/types/public_profile';

// solution
import { data as StaticSolutionEn } from '@/data/static/en/public_profile_solution';
import { data as StaticSolutionId } from '@/data/static/id/public_profile_solution';
import CardSolution from '@/components/layout/card/card-solution';

// skill
import { data as StaticSkillEn } from '@/data/static/en/public_profile_skill';
import { data as StaticSkillId } from '@/data/static/id/public_profile_skill';
import CardSkill from '@/components/layout/card/card-skill';

export async function generateMetadata({ params }: { readonly params: LanguageParams }): Promise<Metadata> {
  const locale = validLocale(params.locale);
  return { 
    metadataBase: new URL(String(siteMetadata.appUrl + `/${locale}/home`)),
    title: `Home | ${siteMetadata.author}`,
    description: 'Home for personal portfolio',

    openGraph: {
      locale: locale,
      type: "website",
      url: String(siteMetadata.appUrl + `/${locale}/home`),
      title: `Home | ${siteMetadata.author}`,
      description: siteMetadata.description,
      images: [`${siteMetadata.appUrl}/assets/open-graph/landing.png`],
      siteName: siteMetadata.author,
    },

    twitter: {
      card: "summary_large_image",
      title: `Home | ${siteMetadata.author}`,
      description: siteMetadata.description,
      images: [`${siteMetadata.appUrl}/assets/open-graph/landing.png`],
      creator: '@' + siteMetadata.author,
    },
  }
}

export default async function Home({ params }: { readonly params: LanguageParams }) {
  const locale = validLocale(params.locale);
  const tNav = dataLocale[locale].navbar;
  const tBody = dataLocale[locale].landing;

  const customParams = {
    offset: 1,
    size: 10,
  }

  // get from api
  let dataSolutions = await getPublicProfileSolutions(String(siteMetadata.apiUsername), locale, customParams)
  if (dataSolutions.data.length === 0) { // get from static
    // check language 
    if (locale === 'id') {
      dataSolutions = StaticSolutionId
    } else {
      dataSolutions = StaticSolutionEn
    }
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

  return (
    <div className='grid min-h-screen'>
      <Navbar 
        titleHome={tNav.title.home}
        titleAbout={tNav.title.about}
        titleProjects={tNav.title.projects}
      />
      <main className='mt-24' >

        <HeroProfile
          title={tBody.title.position}
          description={tBody.description}
        />

        {
          dataSolutions.data.length > 0 &&
          <div>
            <HorizontalRule title={tBody.title.solution} />
            <div className='flex gap-5 justify-center flex-wrap items-center my-5'>
              {
                dataSolutions.data.map((item: PublicProfileSolution) => {
                  return <CardSolution
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    logoUrl={item.logo_url}
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
            <div className='flex gap-5 justify-center flex-wrap items-center my-5'>
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
