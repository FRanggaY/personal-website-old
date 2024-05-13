const siteMetadata = {
  title: process.env.NEXT_PUBLIC_TITLE,
  author: process.env.NEXT_PUBLIC_AUTHOR,
  headerTitle: process.env.NEXT_PUBLIC_PROFILE_NAME,
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  language: process.env.NEXT_PUBLIC_LANGUAGE,
  theme:  process.env.NEXT_PUBLIC_THEME, // system, dark or light
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL, // your website URL
  siteLogo:  process.env.NEXT_PUBLIC_SITE_LOGO,
  socialBanner: process.env.NEXT_PUBLIC_SOCIAL_BANNER, // add social banner in the public folder
  locale: process.env.NEXT_PUBLIC_LOCALE,
}

export default siteMetadata;
