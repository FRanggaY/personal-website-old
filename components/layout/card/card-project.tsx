"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ArrowUpRight } from "lucide-react";

import React from 'react'
import Image from 'next/image';
import Link from "next/link";

const CardProject = ({ title, description, imageUrl, slug }: { title: string, description: string, imageUrl: string | null, slug: string | null }) => {
  if (slug) {
    return (
      <Link href={slug} target="_blank" rel="noopener noreferrer" className="hover:shadow-lg">
        <Card className="text-center">
          <CardHeader>
            <div className="flex flex-col items-start gap-1">
              <CardTitle className="flex gap-5">{title} <ArrowUpRight /></CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            {imageUrl && <Image
              priority
              src={imageUrl}
              width={300}
              height={300}
              alt={title ?? 'project'}
            />}
          </CardContent>
        </Card>
      </Link>
    )
  }
}

export default CardProject
