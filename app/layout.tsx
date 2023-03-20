import '@/styles/theme.css';
import '@/styles/globals.css';
import { Providers } from './providers'
import defaultSeoData from '@/data/json/seo/seoDefault.json'
import { Fragment } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const seoData = defaultSeoData
  return (
    <html suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{seoData.title}</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content={seoData.description} />
        {seoData.twitter ? (
          <>
            <meta name="twitter:card" content={seoData.twitter.cardType} />
            <meta name="twitter:site" content={seoData.twitter.site} />
            <meta name="twitter:creator" content={seoData.twitter.handle} />
          </>
        ) : null}
        {seoData.openGraph ? (
          <>
            <meta property="og:title" content={seoData.openGraph.title} />
            <meta property="og:description" content={seoData.openGraph.description} />
            <meta property="og:url" content={seoData.openGraph.url} />
            <meta property="og:type" content={seoData.openGraph.type} />
            {seoData.openGraph.images ? (
              <>
                {seoData.openGraph.images.map((image, index) => (
                  <Fragment key={index}>
                    <meta property="og:image" content={image.url} />
                    <meta property="og:image:alt" content={image.alt} />
                  </Fragment>
                ))}
              </>
            ) : null}
            <meta property="og:locale" content={seoData.openGraph.locale} />
            <meta property="og:site_name" content={seoData.openGraph.site_name} />
          </>
        ) : null}
        <link rel="icon" href="/favicon.ico" />
        <meta name="next-head-count" content="18" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
