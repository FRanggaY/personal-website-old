"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import React from 'react'
import Link from "next/link";
import { motion } from "framer-motion";

const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface CardProjectProps {
  title: string;
  description: string;
  slug: string | null;
  colspan: boolean;
}

const CardProject: React.FC<CardProjectProps> = ({ title, description, slug, colspan }) => {
  if (slug) {
    return (
      <Link href={slug} target="_blank" rel="noopener noreferrer" className={`${colspan ? 'col-span-1 md:col-span-2' : ''} hover:shadow-lg border rounded-md hover:border-red-500 hover:border-l-8`}>
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
          <Card className="p-4 md:p-6">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </Link>
    )
  }
}

export default CardProject
