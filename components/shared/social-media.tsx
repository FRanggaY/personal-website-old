import React from 'react'

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { socialMedias } from "@/lib/constant";

export default function SocialMedia() {
  return (
    <div className={`hover:scale-100 max-sm:gap-1`}>
      {/* content */}
      {socialMedias.map((item) => {
        if (item.link) {
          return (
            <TooltipProvider key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={item.link} target="_blank" rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" })
                    )}
                  >
                    {item.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        }
      })}
    </div>
  )
}
