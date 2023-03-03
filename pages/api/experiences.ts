import type { NextApiRequest, NextApiResponse } from 'next';
import { Experience, Language, ExperienceTranslation } from '@/models';

// attributes experience
interface ExperienceAttributes{
  id: string;
  url: string;
  image: string;
  name: string;
  description?: string; // optional
  employmentType: string;
  companyName: string;
  location?: string; // optional
  locationType?: string;
  startDate: string;
  endDate: string;
  industry?: string; // optional
}

// type experiences
type Experiences = {
  title: string;
  description?: string; // optional
  experiences: ExperienceAttributes[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; data: Experiences | string }>
) {
  try{
    const { query } = req;
    const lang = (query.lang && query.lang) || 'en_US';
    // find language  specific with filter isActive = 1
    const dataLanguage = await Language.findOne({
      where: { isActive: '1', title: lang },
    }) || "not found";
    let langSelect:any = 'en_US';
    if (dataLanguage) {
      langSelect = lang;
    } else {
      // handle language if not found
      console.error(`Language selected : ${lang} not found or is not active.`);
    }

    // find education specific with filter isActive = 1
    const dataExperience = await Experience.findAll({
      attributes: [
        'id', 'url', 'image', 
        'experiences_translation.name', 'experiences_translation.description', 'experiences_translation.employmentType', 
        'experiences_translation.companyName', 'experiences_translation.location', 'experiences_translation.locationType', 
        'experiences_translation.startDate', 'experiences_translation.endDate', 'experiences_translation.industry'
      ],
      include: [{
        model: ExperienceTranslation,
        where: {
          language: langSelect
        }
      }],
      where: { isActive: '1'},
    });

    // if dataExperience not found
    if (dataExperience.length === 0) {
      const response = { status: 404, data: "Data not found" };
      res.status(response.status).json(response);
    }else{
      // initialize template
      const experiences: Experiences = {
        title: "My Experience", // can change
        description: "", // can change
        experiences: dataExperience.map((experience) => ({ // loop
          id: experience.dataValues.id,
          url : experience.dataValues.url,
          image : experience.dataValues.image,
          name: experience.dataValues.experiences_translation.name,
          description: experience.dataValues.experiences_translation.description,
          employmentType: experience.dataValues.experiences_translation.employmentType,
          companyName: experience.dataValues.experiences_translation.companyName,
          location: experience.dataValues.experiences_translation.location,
          locationType: experience.dataValues.experiences_translation.locationType,
          startDate: experience.dataValues.experiences_translation.startDate,
          endDate: experience.dataValues.experiences_translation.endDate,
          industry: experience.dataValues.experiences_translation.industry,
        })),
      };
      const response = { status: 200, data: experiences };
      res.status(response.status).json(response);
    }
    
  }catch (error) {
    // Throw error
    console.error(error);
    const response = { status: 500, data: "Internal Server Error" };
    res.status(response.status).json(response);
  }
}