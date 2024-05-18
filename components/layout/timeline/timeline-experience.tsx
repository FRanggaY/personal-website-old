import { formatMonthYear } from '@/lib/datetime'
import Image from 'next/image'
import React from 'react'
import ExperienceImage from '@/public/assets/image/experience.png'
import Link from 'next/link'

const TimelineExperience = ({
  companyName,
  employeeType,
  locationType,
  title,
  description,
  logoUrl,
  startedAt,
  finishedAt,
  titleNow,
  websiteUrl,
}: {
  companyName: string,
  employeeType: string,
  locationType: string,
  title: string,
  description: string,
  startedAt: string,
  titleNow: string,
  finishedAt: string | null,
  logoUrl: string | null,
  websiteUrl: string | null,
}) => {

  return (
    <div className='flex min-h-[200px] font-sans pb-2'>
      <div className='flex flex-col'>
        <Link href={websiteUrl ?? ''} target="_blank" rel="noopener noreferrer" className="hover:shadow-lg p-2">
          <Image
            priority
            src={logoUrl ?? ExperienceImage}
            width={100}
            height={100}
            alt={title ?? 'experience'}
          />
        </Link>
        {/* line */}
        <div className='mt-2 w-px grow self-center bg-black dark:bg-white'></div>
      </div>
      <div className='flex-initial pl-4'>
        <div className='font-bold text-black dark:text-white'>{companyName}</div>
        <div className='text-sm text-zinc-600 dark:text-zinc-400'>
          <span>{employeeType} {title} - {locationType} ({formatMonthYear(startedAt)} {finishedAt ? `- ${formatMonthYear(finishedAt)}` : `- ${titleNow}`})</span>
        </div>
        <div className='whitespace-pre-wrap pb-5 pt-3 text-zinc-600 dark:text-zinc-500'>
          {description}
        </div>
      </div>
    </div>
  )
}

export default TimelineExperience
