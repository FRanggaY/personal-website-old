"use client"
import '@/styles/theme.css';
import '@/styles/globals.css';
import { Providers } from './providers'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{process.env.SEO_TITLE}</title>
      <meta name="robots" content="index,follow" />
      <meta name="description" content={process.env.SEO_DESCRIPTION} />
      {process.env.SEO_TWITTER_SITE ? (
        <>
          <meta name="twitter:card" content={process.env.SEO_TWITTER_HANDLE} />
          <meta name="twitter:site" content={process.env.SEO_TWITTER_SITE} />
          <meta name="twitter:creator" content={process.env.SEO_TWITTER_CARDTYPE} />
        </>
      ) : null}
      {process.env.SEO_OPENGRAPH_URL ? (
        <>
          <meta property="og:title" content={process.env.SEO_OPENGRAPH_TITLE} />
          <meta property="og:description" content={process.env.SEO_OPENGRAPH_DESCRIPTION} />
          <meta property="og:url" content={process.env.SEO_OPENGRAPH_URL} />
          <meta property="og:type" content={process.env.SEO_OPENGRAPH_TYPE} />
          <meta property="og:locale" content={process.env.SEO_OPENGRAPH_LOCALE} />
          <meta property="og:site_name" content={process.env.SEO_OPENGRAPH_SITE_NAME} />
        </>
      ) : null}
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href={"/assets/image/my-logo.png"} />
      <link rel="apple-touch-icon" href={"/assets/image/my-logo.png"} />
      <meta name="next-head-count" content="18" />
    </head>
    <body className={roboto.className}>
      <Providers>
        {children}
      </Providers>
    </body>
  </html>
  )
}
