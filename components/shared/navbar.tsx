"use client"
import { cn } from "@/lib/utils";
import {
  Home,
  Layers,
  User2,
  CircleX,
  CircleEllipsis,
  MoveUp
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useState } from "react";
import MyLogo from '@/public/assets/logo/my-logo.png'
import Image from "next/image";
import { ThemeToggle } from "../theme-toggle";
import { LanguageToggle } from "../language-toggle";
import siteMetadata from "@/lib/siteMetaData";
import { useParams } from "next/navigation";

const Navbar = () => {
  const params = useParams<{ locale: string; }>();
  const locale = params.locale || "en"
  const items = [
    { name: "Home", icon: <Home />, link: `/${locale}` },
    { name: "about", icon: <User2 />, link: `/${locale}/about` },
    { name: "projects", icon: <Layers />, link: `/${locale}/projects` },
  ];

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className={`flex justify-around w-full h-fit items-center z-10 fixed p-2 bg-slate-950 dark:bg-white text-white dark:text-black item gap-3 hover:scale-100 max-sm:gap-1`}>
        <Link href={'/'}>
          <Image
            priority
            src={MyLogo}
            width={55}
            alt={siteMetadata.authorInitial ?? 'profile'}
            className='p-2'
          />
        </Link>
        <div className={`hover:scale-100 max-sm:gap-1 hidden sm:flex`}>
          {/* content */}
          {items.map((itm) => {
            return (
              <TooltipProvider key={itm.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={itm.link}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "sm" })
                      )}
                    >
                      {itm.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{itm.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
        {/* mode */}
        <div className="hidden sm:block">
          <LanguageToggle />
          <ThemeToggle />
        </div>
        {/* mobile Button */}
        <button onClick={handleNav} className='block sm:hidden bg-transparent dark:text-black text-white'>
          {nav ? (
            <CircleX />
          ) : (
            <CircleEllipsis />
          )}
        </button>
      </div>


      {/* mobile Menu */}
      {
        nav &&
        <div className="sm:hidden fixed inset-0 flex flex-col justify-center items-center w-full min-h-screen bg-slate-950 dark:bg-white text-white dark:text-black z-5">
          {/* content */}
          {items.map((itm) => {
            return (
              <TooltipProvider key={itm.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={itm.link}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "sm" })
                      )}
                    >
                      {itm.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{itm.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
          {/* mode */}
          <div className='p-4 flex gap-2'>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      }

      {/* scroll to up */}
      {
        !nav &&
        <Button className="fixed bottom-0 right-0" onClick={handleScrollUp}>
          <MoveUp />
        </Button>
      }
    </>
  );
};

export default Navbar;
