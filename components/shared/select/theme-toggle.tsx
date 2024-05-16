"use client";

import React, { useState } from 'react';
// logo from react icons
import { FaStarAndCrescent, FaMoon, FaSun } from 'react-icons/fa';
// theme
import { useTheme } from 'next-themes'

function ThemeSelect() {
  // initialize
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-md py-2 pl-2 pr-2 flex items-center"
      >
        {/* active theme */}
        {activeLogo}
      </button>
      {isOpen && (
        <div className="absolute top-10 right-0 z-50 border border-gray-200 navbar-bg-color rounded-md shadow-lg">
          <div className="p-2 flex flex-col gap-2 items-center">
            {/* option system/default */}
            <button onClick={() => handleDisplayLanguageChange('system')}>
              <FaStarAndCrescent className="text-gray-400" />
            </button>
            {/* option dark */}
            <button onClick={() => handleDisplayLanguageChange('dark')}>
              <FaMoon className="text-gray-400" />
            </button>
            <button onClick={() => handleDisplayLanguageChange('light')}>
              <FaSun className="text-gray-400" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeSelect;
