import React from 'react';
import { Metadata } from 'next';
// to handle language selection
import { packValueChecker } from '@/utils/functionlangChecker'
import { locales } from '@/data/dataTranslation'
// utils
// import { getData } from '@/utils/getData'

export const metadata: Metadata = {
  title: 'Service | ' + process.env.YOURNAME,
};

export default async function Page({ params: { lang } }: any) {
  const langValue = packValueChecker(lang)
  const titleService = locales[langValue].service
  
  return (
    <>
      <div className='md:px-48 px-4 pb-10 pt-28'>
        {/* title */}
        <div className='flex flex-col items-center gap-5 justify-center pb-5'>
          <p className='text-3xl lg:text-4xl font-semibold'>{titleService.title}</p>
          <p className='text-3xl'>{titleService.titleComingSoon}</p>
        </div>

      </div>
    </>
  )
}