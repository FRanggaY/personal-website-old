import type { NextApiRequest, NextApiResponse } from 'next';
import { Education, Language, EducationTranslation } from '@/models';

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
    const dataEducation = await Education.findAll({
      attributes: [
        'id', 'logo', 'url', 
        'educations_translation.title', 'educations_translation.degree', 'educations_translation.fieldOfStudy', 
        'educations_translation.startDate', 'educations_translation.endDate', 
        // // old
        // 'educations_translation.location', 'educations_translation.startDate', 'educations_translation.endDate', 
        // 'educations_translation.description'
      ],
      include: [{
        model: EducationTranslation,
        where: {
          language: langSelect
        }
      }],
      where: { isActive: '1'},
    });

    // if dataEducation not found
    if (dataEducation.length === 0) {
      const response = { status: 404, data: "Data not found" };
      res.status(response.status).json(response);
    }else{
      // initialize template
      const educations: Educations = dataEducation.map((education) => ({ // loop
        id: education.dataValues.id,
        logo : education.dataValues.logo,
        url : education.dataValues.url,
        title: education.dataValues.educations_translation.title,
        degree: education.dataValues.educations_translation.degree,
        fieldOfStudy: education.dataValues.educations_translation.fieldOfStudy,
        // location: education.dataValues.educations_translation.location,
        startDate: education.dataValues.educations_translation.startDate,
        endDate: education.dataValues.educations_translation.endDate,
        // description: education.dataValues.educations_translation.description,
      }));
      const response = { status: 200, data: educations };
      res.status(response.status).json(response);
    }
    
  }catch (error) {
    // Throw error
    console.error(error);
    const response = { status: 500, data: "Internal Server Error" };
    res.status(response.status).json(response);
  }
}