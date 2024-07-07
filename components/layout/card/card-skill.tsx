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
import { motion } from "framer-motion";

const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};


const CardSkill = ({ name, description, logoUrl, websiteUrl }: { name: string, description: string, logoUrl: string | null, websiteUrl: string | null }) => {
  if (websiteUrl) {
    return (
      <Link href={websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:shadow-lg">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1 * stagger,
            ease: "easeInOut",
            duration: 0.5,
          }}
          viewport={{ amount: 0 }}
        >
          <Card className="text-center">
            <CardHeader>
              <div className="space-y-1.5 flex flex-row items-center space-x-4 pb-0">
                {logoUrl && <Image
                  priority
                  src={logoUrl}
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
        </motion.div>
      </Link>
    )
  }
}

export default CardSkill
