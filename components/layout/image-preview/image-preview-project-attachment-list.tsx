
"use client";
import HorizontalRule from '@/components/shared/horizontal-rule';
import ImageModal from '@/components/shared/image/image-modal';
import ImageThumbnail from '@/components/shared/image/image-thumbnail';
import { PublicProfileProjectAttachment } from '@/types/public-profile';
import React, { useState } from 'react';

interface ProjectDetailProps {
  title: string,
  dataProjectDetailAttachmentImage: PublicProfileProjectAttachment[];
}

const ImagePreviewProjectAttachmentList: React.FC<ProjectDetailProps> = ({ title, dataProjectDetailAttachmentImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataProjectDetail, setDataProjectDetail] = useState({
    title: '',
    image_url: ''
  });

  const handleThumbnailClick = (item: PublicProfileProjectAttachment) => {
    setIsModalOpen(true);
    setDataProjectDetail(item);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataProjectDetail({
      title: '',
      image_url: ''
    });
  };

  return (
    <div>
      {
        dataProjectDetailAttachmentImage.length > 0 &&
        <div>
          <HorizontalRule title={title} />
          <div className='flex gap-5 justify-center flex-wrap items-center px-4'>
            {
              dataProjectDetailAttachmentImage.map((item: PublicProfileProjectAttachment) => {
                if(item.image_url){
                  return <ImageThumbnail key={item.id} alt={item.title} src={item.image_url} onClick={() => handleThumbnailClick(item)} />
                }
              })
            }
          </div>
        </div>
      }

      {isModalOpen && (
        <ImageModal alt={dataProjectDetail.title} src={dataProjectDetail.image_url} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ImagePreviewProjectAttachmentList;
