
"use client";
import ImageModal from '@/components/shared/image/image-modal';
import ImageThumbnail from '@/components/shared/image/image-thumbnail';
import { PublicProfileProjectDetail } from '@/types/public-profile';
import React, { useState } from 'react';

interface ProjectDetailProps {
  dataProjectDetail: Partial<PublicProfileProjectDetail>;
}

const ImagePreviewProject: React.FC<ProjectDetailProps> = ({ dataProjectDetail }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThumbnailClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='px-4'>
      {dataProjectDetail.image_url && (
        <ImageThumbnail alt={dataProjectDetail.title as string} src={dataProjectDetail.image_url}  onClick={handleThumbnailClick} />
      )}
      {isModalOpen && dataProjectDetail.image_url && (
        <ImageModal alt={dataProjectDetail.title as string} src={dataProjectDetail.image_url} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ImagePreviewProject;
