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
      src={src}
      width={500}
      height={500}
      alt={`${alt} image`}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
      className='opacity-70 hover:opacity-100'
    />
  );
};

export default ImageThumbnail;
