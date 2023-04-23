import type { NextApiRequest, NextApiResponse } from 'next';
// json
import SkillSolutionEngData from '@/data/locales/en_US/json/skillsSolution.json'
import SkillSolutionIdData from '@/data/locales/in_ID/json/skillsSolution.json'
import SkillTechEngData from '@/data/locales/en_US/json/skillsTech.json'
import SkillTechIdData from '@/data/locales/in_ID/json/skillsTech.json'
import LanguageData from '@/data/locales/en_US/json/languages.json'

// attribute skill
interface SkillAttribute {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  image: string,
  description: string;
  url?: string;
}
// type skills
type Skills = {
  skills: SkillAttribute[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; data: Skills | string }>
) {
  try {
    const { query } = req;
    const lang: any = (query.lang && query.lang) || 'en_US';
    const category = (query.category && query.category) || '';
    const checkLanguage = await LanguageData.languages.filter((item: any) => item.title == lang);
    if (checkLanguage.length == 0) {
      // handle language error
      console.error(`Language selected : ${lang} not found or is not active.`);
      const response = { status: 400, data: "Bad Request" };
      res.status(response.status).json(response);
    } else {
      // data skill tech
      const langSkillTechJson: any = {
        'en_US': SkillTechEngData,
        'in_ID': SkillTechIdData
      }
      // data skill solution
      const langSkillSolutionJson: any = {
        'en_US': SkillSolutionEngData,
        'in_ID': SkillSolutionIdData
      }
      let dataSkillActive;
      if(category == 'tech'){
        // get data active
        dataSkillActive = await langSkillTechJson[lang].skills;
      }else if(category == 'solution'){
        // get data active
        dataSkillActive = await langSkillSolutionJson[lang].skills;
      }else{
        const response = { status: 400, data: "Bad Request" };
        res.status(response.status).json(response);
      }
      // filter active = 1 and category
      let dataSkill = dataSkillActive.filter((item:any) => item.isActive == 1 && item.category == category);
      if (!dataSkill) { // if data not found
        const response = { status: 404, data: "Data not found" };
        res.status(response.status).json(response);
      } else {
        // initialize template
        const skills: Skills = dataSkill.map((item:any) => ({ // loop
          id: item.id,
          name: item.name,
          url: item.url,
          image: item.image,
          description: item.description,
        }))
        const response = { status: 200, data: skills };
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