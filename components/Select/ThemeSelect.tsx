import React, { useState, useEffect } from 'react';
// logo from react icons
import { FaStarAndCrescent, FaMoon, FaSun } from 'react-icons/fa';
// theme
import { useTheme } from 'next-themes'

function ThemeSelect() {
  // initialize
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeThemeValue, setActiveThemeValue] = useState(theme);
  let activeLogo: any = '';

  // handle active logo
  if (activeThemeValue == 'dark') {
    activeLogo = <FaMoon className="text-gray-400 mr-2" />
  } else if (activeThemeValue == 'light') {
    activeLogo = <FaSun className="text-gray-400 mr-2" />
  } else {
    activeLogo = <FaStarAndCrescent className="text-gray-400 mr-2" />
  }

  function handleDisplayLanguageChange(themeName: string) {
    setActiveThemeValue(themeName);
    setIsOpen(false);
    setTheme(themeName);
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border border-blue-100 rounded-md py-2 pl-2 pr-2 flex items-center"
      >
        {/* active theme */}
        {activeLogo}
        {activeThemeValue?.toUpperCase()}
      </button>
      {isOpen && (
        <div className="absolute top-10 right-0 z-50 border border-gray-200 navbar-bg-color rounded-md shadow-lg w-32">
          <ul className="p-2">
            {/* option system/default */}
            <li onClick={() => handleDisplayLanguageChange('system')} className='flex items-center justify-around gap-2 cursor-pointer'>
              <FaStarAndCrescent className="text-gray-400 mr-2" />
              SYSTEM
            </li>
            {/* option dark */}
            <li onClick={() => handleDisplayLanguageChange('dark')} className='flex items-center justify-around gap-2 cursor-pointer'>
              <FaMoon className="text-gray-400 mr-2" />
              DARK
            </li>
            {/* option light */}
            <li onClick={() => handleDisplayLanguageChange('light')} className='flex items-center justify-around gap-2 cursor-pointer'>
              <FaSun className="text-gray-400 mr-2" />
              LIGHT
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ThemeSelect;
