import React from 'react'

function Hero({ greeting, name, positions, greetingNote }: any) {
  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover img-custom'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        {/* greeting */}
        <h2 className='text-4xl lg:text-5xl'>{greeting}</h2>
        {/* name */}
        <p className='py-5 text-4xl lg:text-5xl font-bold'>{name}</p>
        {/* greeting note */}
        <p className='py-5 text-md lg:text-xl'>{greetingNote}</p>
        {/* list position */}
        <div className='flex gap-4 flex-wrap'>
          {positions.map((item: any, index: any) => (
            // position
            <div key={index} className="px-8 py-2 border-l-2 border-b-2 border-blue-400 rounded-md">
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero