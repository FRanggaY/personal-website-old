"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";

const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const CardSolution = ({ title, description, logoUrl }: { title: string, description: string, logoUrl: string | null }) => {
  return (
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
    </motion.div>
  )
}

export default CardSolution
