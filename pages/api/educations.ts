import type { NextApiRequest, NextApiResponse } from 'next';
import { Education } from '@/models';

// attributes education
interface EducationAttributes{
  id: string;
  title: string;
  degree: string;
  fieldOfStudy: string;
  location?: string; // optional
  startDate: string;
  endDate: string;
  description?: string; // optional
  logo: string;
  url?: string; // optional
}

// type educations
type Educations = {
  title: string;
  description?: string; // optional
  educations: EducationAttributes[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; data: Educations | string }>
) {
  try{
    // ON PROGRESS - FILTER LANGUAGE
    // const { query } = req;
    // const lang = query.lang || 'ENG';
  
    // find education specific with filter isActive = 1
    const dataEducation = await Education.findAll({
      attributes: ['id', 'title', 'degree', 'fieldOfStudy', 'location', 'startDate', 'endDate', 'description', 'logo', 'url'],
      where: { isActive: '1'},
    });

    // if dataEducation not found
    if (dataEducation.length === 0) {
      const response = { status: 404, data: "Data not found" };
      res.status(response.status).json(response);
    }else{
      // initialize template
      const educations: Educations = {
        title: "My Educations", // can change
        description: "", // can change
        educations: dataEducation.map((education) => ({ // loop
          id: education.dataValues.id,
          title: education.dataValues.title,
          degree: education.dataValues.degree,
          fieldOfStudy: education.dataValues.fieldOfStudy,
          location: education.dataValues.location,
          startDate: education.dataValues.startDate,
          endDate: education.dataValues.endDate,
          description: education.dataValues.description,
          logo : education.dataValues.logo,
          url : education.dataValues.url,
        })),
      };
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