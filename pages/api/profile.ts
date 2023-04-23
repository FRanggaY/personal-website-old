import type { NextApiRequest, NextApiResponse } from 'next';
// json
import SocialMediaData from '@/data/locales/en_US/json/socialMedia.json'

// attributes socialmedia
interface SocialMediaAttributes {
  id: string;
  username: string;
  name: string;
  image: string;
  url: string;
}

// type profile
type Profile = {
  name: string;
  position: string[];
  socialMedia: SocialMediaAttributes[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; data: Profile | string }>
) {
  try {
    // filter active = 1
    const dataSocialMedia = await SocialMediaData.social_media.filter((item:any) => item.isActive == 1);

    // if data not found
    if (dataSocialMedia.length === 0) {
      const response = { status: 404, data: "Data not found" };
      res.status(response.status).json(response);
    } else {
      // initialize template
      const profile: Profile = {
        name: process.env.YOURNAME || '', // can change
        position: process.env.YOURPOSITIONJOB!.split(', ') || [''], // can change
        socialMedia: dataSocialMedia.map((socialmedia:any) => ({ // loop
          id: socialmedia.id,
          username: socialmedia.username,
          name: socialmedia.name,
          image: socialmedia.image,
          url: socialmedia.url,
        })),
      };
      const response = { status: 200, data: profile };
      res.status(response.status).json(response);
    }

  } catch (error) {
    // Throw error
    console.error(error);
    const response = { status: 500, data: "Internal Server Error" };
    res.status(response.status).json(response);
  }
}