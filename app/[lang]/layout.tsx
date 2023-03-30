'use client'
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from "next/navigation";
// additional component
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// utils
import { getData } from '@/utils/getData'

export default function PublicLayout({
  children,
}: any) {
  // initialize
  const currentPath = usePathname();
  const router = useRouter();
  const [dataProfile, setDataProfile]: any = useState();
  // get data profile
  const fetchDataProfile = async () => {
    const data = await getData('profile', false);
    setDataProfile(data.data);
  };
  // set data profile
  useEffect(() => {
    fetchDataProfile();
  }, []);

  if (!dataProfile) {
    return null
  }

  return (
    <>
      {/* header */}
      <header>
        {/* navbar */}
        <Navbar currentPath={currentPath} router={router} />
      </header>
      {/* content */}
      <main>{children}</main>
      {/* footer */}
      <footer>
        <Footer currentPath={currentPath} socialMedia={dataProfile.socialMedia} />
      </footer>
    </>
  )
}