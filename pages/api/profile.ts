import type { NextApiRequest, NextApiResponse } from 'next';
import { SocialMedia } from '@/models';

// attributes socialmedia
interface SocialMediaAttributes{
  id: string;
  name: string;
  url: string;
  logo: string;
}

// type profile
type Profile = {
  name: string;
  position: string;
  socialMedia: SocialMediaAttributes[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; data: Profile | string }>
) {
  try{
    // find socialmedia specific with filter isActive = 1
    const dataSocialMedia = await SocialMedia.findAll({
      attributes: [
        'id', 'name', 'url', 'logo'
      ],
      where: { isActive: '1'},
    });

    // if dataSocialMedia not found
    if (dataSocialMedia.length === 0) {
      const response = { status: 404, data: "Data not found" };
      res.status(response.status).json(response);
    }else{
      // initialize template
      const profile: Profile = {
        name: process.env.YOURNAME || '', // can change
        position: process.env.YOURPOSITIONJOB || '', // can change
        socialMedia: dataSocialMedia.map((socialmedia) => ({ // loop
          id: socialmedia.dataValues.id,
          name : socialmedia.dataValues.name,
          url : socialmedia.dataValues.url,
          logo: socialmedia.dataValues.logo,
        })),
      };
      const response = { status: 200, data: profile };
      res.status(response.status).json(response);
    }
    
  }catch (error) {
    // Throw error
    console.error(error);
    const response = { status: 500, data: "Internal Server Error" };
    res.status(response.status).json(response);
  }
}