import type { NextApiRequest, NextApiResponse } from 'next';
// json
import EducationEngData from '@/data/locales/en_US/json/educations.json'
import EducationIdData from '@/data/locales/in_ID/json/educations.json'
import LanguageData from '@/data/locales/en_US/json/languages.json'

// attributes education
interface EducationAttributes{
  id: string;
  title: string;
  degree: string;
  fieldOfStudy: string;
  // location?: string; // optional
  startDate: string;
  endDate: string;
  // description?: string; // optional
  logo: string;
  url?: string; // optional
}

// type educations
type Educations = EducationAttributes[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; data: Educations | string }>
) {
  try{
    const { query } = req;
    const lang:any = (query.lang && query.lang) || 'en_US';
    const checkLanguage = await LanguageData.languages.filter((item: any) => item.title == lang);
    if (checkLanguage.length == 0) {
      // handle language error
      console.error(`Language selected : ${lang} not found or is not active.`);
      const response = { status: 400, data: "Bad Request" };
      res.status(response.status).json(response);
    } else {
      // data education
      const langEducationJson: any = {
        'en_US': EducationEngData,
        'in_ID': EducationIdData
      }
      // filter active = 1 and language selected
      const dataEducation = await langEducationJson[lang].educations.filter((item: any) => item.isActive == 1 && item.language == lang);  
      // if dataEducation not found
      if (dataEducation.length === 0) {
        const response = { status: 404, data: "Data not found" };
        res.status(response.status).json(response);
      }else{
        // initialize template
        const educations: Educations = dataEducation.map((item:any) => ({ // loop
          id: item.id,
          logo : item.logo,
          url : item.url,
          title: item.title,
          degree: item.degree,
          fieldOfStudy: item.fieldOfStudy,
          // location: item.location,
          startDate: item.startDate,
          endDate: item.endDate,
          // description: item.description,
        }));
        const response = { status: 200, data: educations };
        res.status(response.status).json(response);
      }
    }
  }catch (error) {
    // Throw error
    console.error(error);
    const response = { status: 500, data: "Internal Server Error" };
    res.status(response.status).json(response);
  }
}