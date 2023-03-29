
import React from 'react';
import Image from 'next/image';
import { notFound } from "next/navigation"
// to handle language selection
import { locales, dataLangConvert } from '@/data/dataTranslation'
// logo from react icons
import { RiArrowUpCircleFill } from 'react-icons/ri'
// my logo
import MyLogo from '@/public/assets/image/my-logo.png'
// social media logo
import githubLogo from '@/public/assets/image/social_medias/github.png'
import linkedinLogo from '@/public/assets/image/social_medias/linkedin.png'
import instagramLogo from '@/public/assets/image/social_medias/instagram.png'

function Footer({ currentPath, socialMedia }: any) {
  // get active language from path
  const activeLang = currentPath.split('/')[1];
  let activeLangValueDefaultFormat = ''
  let activeLangValueInitial = ''
  // list socialMediaLogo
  const socialMediaLogo: any = {
    'github': githubLogo,
    'linkedin': linkedinLogo,
    'instagram': instagramLogo,
  }
  // check active language
  try {
    activeLangValueDefaultFormat = dataLangConvert[activeLang].formatLang
    activeLangValueInitial = dataLangConvert[activeLang].initial
  } catch (error) {
    notFound();
  }
  // get title data
  const titleFooter = locales[activeLangValueDefaultFormat].footer
  // function scroll to the top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='py-4'>
      <div className='flex justify-around bg-blue-400'>
        {/* button scroll to the top */}
        <div>
          <button className='absolute footer-bg-color p-2 flex flex-col items-center rounded-md border-2' onClick={scrollTop}>
            <RiArrowUpCircleFill size={30} />
            <p className='font-bold'>{titleFooter.base.buttonTopTitle}</p>
          </button>
        </div>
        {/* group button social media */}
        <div className='flex gap-2 p-2'>
          {socialMedia.map((data: any, index: string) => {
            // button social media
            return <a href={data.url} key={index} className='p-2 footer-bg-color border-md rounded-md' target='_blank'>
              <Image src={socialMediaLogo[data.name]} alt={data.name} width={30} />
            </a>
          })}
        </div>
      </div>
      <div className='flex flex-col items-center gap-4 md:pt-3 pt-14'>
        {/* Logo */}
        <Image
          priority
          src={MyLogo}
          width={60}
          alt="FRY"
        />
        {/* copyright */}
        <p>{titleFooter.base.title}</p>
      </div>
    </div>
  );
};

export default Footer;