const siteMetadata = {
    title: process.env.YOURNAME,
    author: process.env.SEO_CREATOR,
    headerTitle: process.env.YOURNAME,
    description: process.env.SEO_DESCRIPTION,
    language: process.env.SEO_LOCALE,
    theme:  process.env.THEME, // system, dark or light
    siteUrl: process.env.SEO_URL, // your website URL
    siteLogo:  process.env.SITE_LOGO,
    socialBanner: process.env.SEO_URL_ASSET + "/" + process.env.SOCIAL_BANNER, // add social banner in the public folder
    locale: process.env.SEO_LOCALE,
  }

export default siteMetadata;
