import { Metadata } from 'next';

const seo_title = process.env.YOURNAME;
const seo_description = 'This is portfolio page';
const seo_icon = '/assets/image/my-logo.png'

export const metadata: Metadata = {
  title: seo_title,
  description: seo_description,
  icons: {
    icon: seo_icon,
    shortcut: seo_icon,
    apple: seo_icon,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: seo_icon,
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
};

export default async function Home() {
  return (
    <div className='flex flex-wrap justify-center items-center h-screen'>
      <a href="/en-us" className='text-center lg:p-96 p-36 border'>English</a>
      <a href="/in-id" className='text-center lg:p-96 p-36 border'>Indonesia</a>
    </div>
  )
}
