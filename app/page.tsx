import { redirect } from 'next/navigation';
// import { Metadata } from 'next';

// const seo_title = process.env.YOURNAME;
// const seo_description = 'This is portfolio page';
// const seo_icon = '/assets/image/my-logo.png'

// export const metadata: Metadata = {
//   viewport: {
//     width: 'device-width',
//     initialScale: 1,
//     maximumScale: 1,
//   },
//   title: seo_title,
//   description: seo_description,
//   icons: {
//     icon: seo_icon,
//     shortcut: seo_icon,
//     apple: seo_icon,
//     other: {
//       rel: 'apple-touch-icon-precomposed',
//       url: seo_icon,
//     },
//   },
//   robots: {
//     index: false,
//     follow: true,
//     nocache: true,
//     googleBot: {
//       index: true,
//       follow: false,
//       noimageindex: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   openGraph: {
//     title: seo_title,
//     description: seo_description,
//     url:  process.env.SEO_URL,
//     siteName: process.env.SEO_SITE_NAME,
//     locale: process.env.SEO_LOCALE,
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: seo_title,
//     description: seo_description,
//     site: process.env.SEO_SITE_NAME,
//     creator: '@' + process.env.SEO_CREATOR
//   },
// };

export default async function Home() {
  // COMING SOON (checking user location then select automatically language)
  redirect('/en-us');
}
