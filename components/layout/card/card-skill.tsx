"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ArrowUpRight } from "lucide-react";

import React from 'react'
import Image from 'next/image';
import Link from "next/link";

const CardSkill = ({ name, description, imageUrl, websiteUrl }: { name: string, description: string, imageUrl: string | null, websiteUrl: string | null }) => {
  if (websiteUrl) {
    return (
      <Link href={websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:shadow-lg">
        <Card className="text-center">
          <CardHeader>
            <div className="space-y-1.5 flex flex-row items-center space-x-4 pb-0">
              {imageUrl && <Image
                priority
                src={imageUrl}
                width={60}
                height={60}
                alt={name ?? 'skill'}
                className='p-2 bg-transparent rounded-full'
              />}
              <div className="flex flex-col items-start gap-1">
                <CardTitle className="flex gap-5">{name} <ArrowUpRight /></CardTitle>
                <CardDescription>{description}</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </Link>
    )
  }
}

export default CardSkill
