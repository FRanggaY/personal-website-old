const siteMetadata = {
  author: process.env.NEXT_PUBLIC_AUTHOR,
  authorInitial: process.env.NEXT_PUBLIC_AUTHOR_INITIAL,
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  siteLogo:  process.env.NEXT_PUBLIC_SITE_LOGO,

  appVersion: process.env.NEXT_PUBLIC_APP_VERSION,
  appUrl: process.env.NEXT_PUBLIC_APP_URL,
  apiUrl: process.env.NEXT_PUBLIC_API_URL,

  apiUsername: process.env.NEXT_PUBLIC_API_USERNAME,

  socialMedia: {
    github:  process.env.NEXT_PUBLIC_GITHUB_URL,
    linkedin:  process.env.NEXT_PUBLIC_LINKEDIN_URL,
    youtube:  process.env.NEXT_PUBLIC_YOUTUBE_URL,
    instagram:  process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  },

  keywords: [
    "fry",
    "franciscus rangga",
    "franciscusrangga",
    "FRY",
    "franciscus rangga y",
    "Franciscus Rangga Y",
    "Franciscus Rangga",
  ]
}

export default siteMetadata;
