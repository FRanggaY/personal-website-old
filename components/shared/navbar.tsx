"use client"
import { cn } from "@/lib/utils";
import {
  CircleX,
  CircleEllipsis,
  MoveUp
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

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
    { name: "Home", link: `/${locale}` },
    { name: "About", link: `/${locale}/about` },
    { name: "Projects", link: `/${locale}/projects` },
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
      <nav className={`flex justify-around w-full h-fit items-center z-10 fixed p-2 bg-slate-950 dark:bg-white text-white dark:text-black item gap-3 hover:scale-100 max-sm:gap-1`}>
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
      </nav>


      {/* mobile Menu */}
      {
        nav &&
        <nav className="sm:hidden fixed inset-0 flex flex-col justify-center items-center w-full min-h-screen bg-slate-950 dark:bg-white text-white dark:text-black z-5">
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
          {/* mode */}
          <div className='p-4 flex gap-2'>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>
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
