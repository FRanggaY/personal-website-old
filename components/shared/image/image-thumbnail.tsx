import siteMetadata from '@/lib/siteMetaData';
import Image from 'next/image';
import React from 'react';

interface ImageThumbnailProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ImageThumbnail: React.FC<ImageThumbnailProps> = ({ src, alt, onClick }) => {
  return (
    <Image
      src={siteMetadata.apiUrl + '/' + src}
      width={500}
      height={500}
      alt={`${alt} image`}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
      loading='lazy'
      className='hover:scale-105'
    />
  );
};

export default ImageThumbnail;
