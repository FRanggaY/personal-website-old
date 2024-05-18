"use client"

import * as React from "react"
import { Globe } from "lucide-react";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useParams, usePathname, useRouter } from "next/navigation"

export function LanguageToggle() {
  const params = useParams<{ locale: string; }>();
  const pathName = usePathname();
  const router = useRouter();

  const handleLanguageChange = (lang: string) => {
    let replacedUrl = `/${lang}`
    if(pathName !== '/'){
      replacedUrl = pathName.replace(params.locale, lang)
    }
    router.replace(replacedUrl)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange("id")}>
          IN
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
          EN
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
