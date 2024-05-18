"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import React from 'react'
import Image from 'next/image';

const CardSolution = ({ title, description, logoUrl }: { title: string, description: string, logoUrl: string | null }) => {
  return (
    <Card className="text-center">
      <CardHeader>
        {logoUrl && <Image
          priority
          src={logoUrl}
          width={100}
          height={100}
          alt={title ?? 'solution'}
          className='p-2 bg-transparent rounded-full'
        />}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

export default CardSolution
