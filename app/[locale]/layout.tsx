import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "./providers";
import siteMetadata from "@/lib/siteMetaData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(String(siteMetadata.appUrl)),
  title: {
    default: 'Portfolio',
    template: `%s - ${siteMetadata.author}`,
  },
  description: siteMetadata.description,

  // seo keyword
  keywords: siteMetadata.keywords,
  authors: [
    {
      name: siteMetadata.author,
      url: siteMetadata.socialMedia.github,
    },
  ],
  creator: siteMetadata.author,

  openGraph: {
    type: "website",
    url: siteMetadata.appUrl,
    title: `Portfolio | ${siteMetadata.author}`,
    description: siteMetadata.description,
    images: [`${siteMetadata.appUrl}/assets/open-graph/landing.png`],
    siteName: siteMetadata.author,
  },
  twitter: {
    card: "summary_large_image",
    title: `Portfolio | ${siteMetadata.author}`,
    description: siteMetadata.description,
    images: [`${siteMetadata.appUrl}/assets/open-graph/landing.png`],
    creator: '@' + siteMetadata.author,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className} >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
