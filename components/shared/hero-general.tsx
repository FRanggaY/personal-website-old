"use client";

import React from 'react'

const HeroGeneral = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className='flex flex-wrap justify-center gap-5'>
      <div className='text-left p-5'>
        <p className='text-4xl md:text-5xl font-semibold mt-4'>{title}</p>
        <p className='text-2xl md:text-3xl font-light mt-2'>{description}</p>
      </div>
    </div>
  )
}

export default HeroGeneral
