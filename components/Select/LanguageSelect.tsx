import React, { useState } from 'react';
import Image from 'next/image';
// logo from react icons
import { FaGlobe } from 'react-icons/fa';
// flag logo
import FlagInd from '@/public/assets/image/languages/flag-ind.png';
import FlagEng from '@/public/assets/image/languages/flag-eng.png';

function LanguageSelect({ currentPath, router, activeLangValueInitial }: any) {
  // initialize
  const [isOpen, setIsOpen] = useState(false);
  const [activeLangValue, setActiveLangValue] = useState(activeLangValueInitial);

  function handleDisplayLanguageChange(langUrl: string, langName: string) {
    setActiveLangValue(langName);
    setIsOpen(false);
    // Perform language change based on langUrl
    const additionalParameter = currentPath.substring(6)
    const newUrl = langUrl + additionalParameter
    router.push(newUrl);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border border-blue-100 rounded-md py-2 pl-2 pr-2 flex items-center"
      >
        {/* active language */}
        <FaGlobe className="text-gray-400 mr-2" />
        {activeLangValue}
      </button>
      {isOpen && (
        <div className="absolute top-10 right-0 z-50 border border-gray-200 rounded-md navbar-bg-color shadow-lg w-28">
          <ul className="p-2">
            {/* option ind */}
            <li onClick={() => handleDisplayLanguageChange('/in-id', 'IND')} className='flex items-center justify-around gap-2 cursor-pointer'>
              <Image src={FlagInd} alt="IND Flag" width={40} />
              IND
            </li>
            {/* option eng */}
            <li onClick={() => handleDisplayLanguageChange('/en-us', 'ENG')} className='flex items-center justify-around gap-2 cursor-pointer'>
              <Image src={FlagEng} alt="ENG Flag" width={40} />
              ENG
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageSelect;
