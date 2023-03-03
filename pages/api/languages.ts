import type { NextApiRequest, NextApiResponse } from 'next';
import { Language } from '@/models';

// attributes language
interface LanguageAttributes{
  id: string;
  name: string;
  proficieny: string;
  image: string;
}

// type languages
type Languages = {
  title: string;
  description?: string; // optional
  languages: LanguageAttributes[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; data: Languages | string }>
) {
  try{
    // find language specific with filter isActive = 1
    const dataLanguage = await Language.findAll({
      attributes: [
        'name', 'proficieny', 'image', 
      ],
    });

    // if dataLanguage not found
    if (dataLanguage.length === 0) {
      const response = { status: 404, data: "Data not found" };
      res.status(response.status).json(response);
    }else{
      // initialize template
      const language: Languages = {
        title: "My Language", // can change
        description: "", // can change
        languages: dataLanguage.map((language) => ({ // loop
          id: language.dataValues.id,
          name : language.dataValues.name,
          proficieny : language.dataValues.proficieny,
          image: language.dataValues.image,
        })),
      };
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