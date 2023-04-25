import React from 'react'
// import react icons
import { RiEyeFill, RiCodeBoxFill } from 'react-icons/ri'
// additional component
import FullscreenImage from '@/components/FullScreenImage';

// props
interface Props {
  data: any,
}

interface ProjectDetailProps {
  name: string;
  projectCreated: string;
  projectUpdated: string;
  description: string;
  tags: string;
  urlPreview: string;
  urlRepository: string;
}

function ProjectDetail({ name, projectCreated, projectUpdated, description, tags, urlPreview, urlRepository }: ProjectDetailProps) {
  return (
    <div>
      <p className='text-3xl'>{name}</p>
      <span className='text-gray-400'>{projectCreated} - {projectUpdated}</span>
      <p className='text-xl'>{description}</p>
      <p className='text-xl'>{tags}</p>
      <div className='flex flex-wrap gap-5'>
        {urlPreview && (
          <a href={urlPreview} target="_blank" className='hover:bg-gray-200 p-2'>
            <RiEyeFill size={50} />
          </a>
        )}
        {urlRepository && (
          <a href={urlRepository} target="_blank" className='hover:bg-gray-200 p-2'>
            <RiCodeBoxFill size={50} />
          </a>
        )}
      </div>
    </div>
  )
}

interface ProjectImagesProps {
  images: any;
}

function ProjectImages({ images }: ProjectImagesProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-5 pt-5'>
      <p className='text-2xl font-semibold'>Detail</p>
      <div className='flex flex-wrap justify-center gap-2'>
        {images.map((item: any, index: string) => {
          if (item.attachment) {
            return (
              <FullscreenImage key={index}
                src={"/assets/image/projects/" + item.attachment}
                alt={item.name}
                width={300}
                height={100}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

function SectionProjectDetail({ data }: Props) {
  return (
    <div className='md:px-48 px-4 pb-10 pt-28'>
        <div className='flex flex-wrap justify-center gap-5'>
          {/* left */}
          <ProjectDetail 
            name={data.name}
            projectCreated={data.projectCreated}
            projectUpdated={data.projectUpdated}
            description={data.description}
            tags={data.tags}
            urlPreview={data.urlPreview}
            urlRepository={data.urlRepository}
          />
          {/* right */}
          <div>
            {/* thumbnail */}
            {data.image &&
              <FullscreenImage
                src={"/assets/image/projects/" + data.image}
                alt={data.name}
                width={500}
                height={100}
              />}
          </div>
        </div>
        {/* detail image */}
        {data.images.length != 0 ? (
          <ProjectImages images={data.images} />
        ) : (
          <div></div>
        )}

      </div>
  )
}
export default SectionProjectDetail