import type { NextApiRequest, NextApiResponse } from 'next';
// json
import ExperienceEngData from '@/data/locales/en_US/json/experiences.json'
import ExperienceIdData from '@/data/locales/in_ID/json/experiences.json'
import LanguageData from '@/data/locales/en_US/json/languages.json'

// attributes experience
interface ExperienceAttributes {
  id: string;
  url: string;
  image: string;
  name: string;
  // description?: string; // optional
  employmentType: string;
  companyName: string;
  // location?: string; // optional
  locationType?: string; // optional
  startDate: string;
  endDate: string;
  // industry?: string; // optional
}

// type experiences
type Experiences = ExperienceAttributes[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; data: Experiences | string }>
) {
  try {
    const { query } = req;
    const lang: any = (query.lang && query.lang) || 'en_US';
    const checkLanguage = await LanguageData.languages.filter((item: any) => item.title == lang);
    if (checkLanguage.length == 0) {
      // handle language error
      console.error(`Language selected : ${lang} not found or is not active.`);
      const response = { status: 400, data: "Bad Request" };
      res.status(response.status).json(response);
    } else {
      // data experience
      const langExperienceJson: any = {
        'en_US': ExperienceEngData,
        'in_ID': ExperienceIdData
      }
      // filter active = 1 and language selected
      const dataExperience = await langExperienceJson[lang].experiences.filter((item: any) => item.isActive == 1 && item.language == lang);
      // if dataExperience not found
      if (dataExperience.length === 0) {
        const response = { status: 404, data: "Data not found" };
        res.status(response.status).json(response);
      } else {
        // initialize template
        const experiences: Experiences = dataExperience.map((item: any) => ({ // loop
          id: item.id,
          url: item.url,
          image: item.image,
          name: item.name,
          // description: item.description,
          employmentType: item.employmentType,
          companyName: item.companyName,
          // location: item.location,
          locationType: item.locationType,
          startDate: item.startDate,
          endDate: item.endDate,
          // industry: item.industry,
        }));
        const response = { status: 200, data: experiences };
        res.status(response.status).json(response);
      }
    }
  } catch (error) {
    // Throw error
    console.error(error);
    const response = { status: 500, data: "Internal Server Error" };
    res.status(response.status).json(response);
  }
}