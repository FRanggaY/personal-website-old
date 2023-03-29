
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {notFound} from "next/navigation"
// to handle language selection
import { locales, dataLangConvert } from '@/data/dataTranslation'
// logo from react icons
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
// my logo
import MyLogo from '@/public/assets/image/my-logo.png'
// additional component
import LanguageSelect from './Select/LanguageSelect';
import ThemeSelect from './Select/ThemeSelect';

function Navbar ({ currentPath, router }: any){
  // get active language from path
  const activeLang = currentPath.split('/')[1];
  let activeLangValueDefaultFormat = ''
  let activeLangValueInitial = ''
  // check active language
  try {
    activeLangValueDefaultFormat = dataLangConvert[activeLang].formatLang
    activeLangValueInitial = dataLangConvert[activeLang].initial
  } catch (error) {
    notFound();
  }
  // get title data
  const titleNavbar = locales[activeLangValueDefaultFormat].navbar
  // setting navbar
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300 navbar-bg-color shadow-md'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center px-4 navbar-text-color'>
        {/* logo */}
        <Link href={titleNavbar.home.url + activeLang}>
          <Image
            priority
            src={MyLogo}
            width={60}
            alt="FRY"
          />
        </Link>
        {/* content */}
        <ul className='hidden sm:flex navbar-text-color'>
          <li className='p-4'>
            <Link href={activeLang + "/" + titleNavbar.projects.url}>{titleNavbar.projects.title}</Link>
          </li>
          <li className='p-4'>
            <Link href={activeLang + "/" + titleNavbar.skills.url}>{titleNavbar.skills.title}</Link>
          </li>
          <li className='p-4'>
            <Link href={activeLang + "/" + titleNavbar.about.url}>{titleNavbar.about.title}</Link>
          </li>
          <li className='p-4'>
            <Link href={activeLang + "/" + titleNavbar.service.url}>{titleNavbar.service.title}</Link>
          </li>
        </ul>
        {/* mode */}
        <ul className='hidden sm:flex navbar-text-color'>
          <li className='p-4'>
            <ThemeSelect />
          </li>
          <li className='p-4'>
            <LanguageSelect currentPath={currentPath} router={router} activeLangValueInitial={activeLangValueInitial} />
          </li>
        </ul>
        {/* mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <RiCloseFill size={20} className='navbar-text-color' />
          ) : (
            <RiMenu3Fill size={20} className='navbar-text-color' />
          )}
        </div>
        {/* mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen navbar-bg-color text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen navbar-bg-color text-center ease-in duration-300'
          }
        >
          <ul>
            <li className='p-4 text-3xl hover:text-gray-500 flex justify-center'>
              {/* logo */}
              <Link href='/'>
                <Image
                  priority
                  src={MyLogo}
                  width={60}
                  alt="FRY"
                />
              </Link>
            </li>
            {/* line */}
            <div className='py-3'>
              <hr/>
            </div>
            {/* content */}
            <li onClick={handleNav} className='p-4 text-3xl hover:text-gray-500'>
              <Link href={activeLang + "/" + titleNavbar.projects.url}>{titleNavbar.projects.title}</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-3xl hover:text-gray-500'>
              <Link href={activeLang + "/" + titleNavbar.skills.url}>{titleNavbar.skills.title}</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-3xl hover:text-gray-500'>
              <Link href={activeLang + "/" + titleNavbar.about.url}>{titleNavbar.about.title}</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-3xl hover:text-gray-500'>
              <Link href={activeLang + "/" + titleNavbar.service.url}>{titleNavbar.service.title}</Link>
            </li>
            {/* mode */}
            <div className='p-4 flex gap-2'>
              <ThemeSelect />
              <LanguageSelect currentPath={currentPath} router={router} activeLangValueInitial={activeLangValueInitial} />
            </div>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Navbar;