"use client"
import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import MyLogo from '@/public/assets/logo/my-logo.png'
import Image from "next/image";
import siteMetadata from "@/lib/siteMetaData";
import { useParams } from "next/navigation";
import { socialMedias } from "@/lib/constant";

const Footer = ({ titleHome, titleAbout, titleProjects }: { titleHome: string, titleAbout: string, titleProjects: string }) => {
  const params = useParams<{ locale: string; }>();
  const locale = params.locale || "en"
  const items = [
    { name: titleHome, link: `/${locale}` },
    { name: titleAbout, link: `/${locale}/about` },
    { name: titleProjects, link: `/${locale}/projects` },
  ];

  return (
    <footer className={`mt-auto w-full h-fit bg-gray-300 text-black dark:bg-slate-800 dark:text-white`}>
      <div className="flex flex-wrap justify-around items-center p-2 item gap-3 hover:scale-100 max-sm:gap-1">
        <Link href={'/'} className="flex items-center gap-2">
          <Image
            priority
            src={MyLogo}
            width={55}
            alt={siteMetadata.authorInitial ?? 'profile'}
            className='p-2 bg-slate-200 rounded-lg'
          />
          <p className="text-lg">{siteMetadata.author}</p>
        </Link>
        <div className={`hover:scale-100 max-sm:gap-1`}>
          {/* content */}
          {items.map((item) => {
            return (
              <Link href={item.link} key={item.link}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" })
                )}
              >
                <p>{item.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="mt-2 flex flex-wrap justify-around items-center p-2 item gap-3 hover:scale-100 max-sm:gap-10">
        <p className="text-xs text-center sm:text-left">{new Date().getFullYear()} © {siteMetadata.author}. All rights reserved. <span className="p-1 bg-blue-600 text-white">{siteMetadata.appVersion}</span> </p>
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
      </div>
    </footer>
  );
};

export default Footer;
