import Link from 'next/link';
import React from 'react';

interface ImageModalProps {
  alt: string;
  src: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  return (
    <Link href="" className='cursor-default' onClick={onClose}>
      <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50' style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
        <div className='relative bg-white rounded-sm'>
          <img className='max-w-[90vw] max-h-[90vh]' src={src} alt={`${alt} modal`} />
        </div>
      </div>
    </Link>
  );
};


export default ImageModal;
