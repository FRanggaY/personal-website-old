"use client"
import { useState } from 'react';
import Image from 'next/image';

function FullscreenImage({ src, alt, width, height }: any) {
  // initialize
  const [isFullscreen, setIsFullscreen] = useState(false);
  // toggle
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div>
      {/* after image */}
      {isFullscreen && (
        <div
          onClick={toggleFullscreen}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={100}
            height={100}
            style={{ width: '90%', height: 'auto' }}
            unoptimized
            className='cursor-pointer'
          />
        </div>
      )}
      {/* before image */}
      <Image
        src={src}
        alt={alt}
        onClick={toggleFullscreen}
        width={width}
        height={height}
        style={{ width: '100%', height: 'auto' }}
        priority={true}
        className='cursor-pointer'
      />
    </div>
  );
}

export default FullscreenImage;
