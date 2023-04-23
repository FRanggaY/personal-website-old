import type { NextApiRequest, NextApiResponse } from 'next';
// json
import LanguageData from '@/data/locales/en_US/json/languages.json'

// attributes language
interface LanguageAttributes{
  id: string;
  name: string;
  proficieny: string;
  image: string;
}

// type languages
type Languages = LanguageAttributes[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; data: Languages | string }>
) {
  try{
    // data language
    const dataLanguage = await LanguageData.languages;

    // if dataLanguage not found
    if (dataLanguage.length === 0) {
      const response = { status: 404, data: "Data not found" };
      res.status(response.status).json(response);
    }else{
      // initialize template
      const language: Languages = dataLanguage.map((item) => ({ // loop
        id: item.id,
        name : item.name,
        proficieny : item.proficieny,
        image: item.image,
      }));
      const response = { status: 200, data: language };
      res.status(response.status).json(response);
    }
    
  }catch (error) {
    // Throw error
    console.error(error);
    const response = { status: 500, data: "Internal Server Error" };
    res.status(response.status).json(response);
  }
}