import siteMetadata from '@/lib/siteMetaData';
import Image from 'next/image';
import React from 'react';

interface ImageModalProps {
  alt: string;
  src: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  return (
    <button className='cursor-default' onClick={onClose}>
      <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50' style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
        <div className='relative bg-white rounded-sm'>
          <Image
            className='max-w-[90vw] max-h-[90vh]'
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={500}
            height={300} 
            src={siteMetadata.apiUrl + '/' + src}
            alt={`${alt} modal`} />
        </div>
      </div>
    </button>
  );
};


export default ImageModal;
