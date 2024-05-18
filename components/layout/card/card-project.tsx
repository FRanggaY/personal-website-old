"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import React from 'react'
import Link from "next/link";

interface CardProjectProps {
  title: string;
  description: string;
  slug: string | null;
  colspan: boolean;
}

const CardProject: React.FC<CardProjectProps> = ({ title, description, slug, colspan }) => {
  if (slug) {
    return (
      <Link href={slug} target="_blank" rel="noopener noreferrer" className={`${colspan ? 'col-span-1 md:col-span-2' : ''} hover:shadow-lg border rounded-full hover:border-red-500 hover:border-l-8`}>
        <Card className="p-4 md:p-6">
          <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    )
  }
}

export default CardProject
