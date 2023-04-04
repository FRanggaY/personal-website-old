import type { NextApiRequest, NextApiResponse } from 'next';
import { Skill, Language, SkillTranslation } from '@/models';

// attributes skill
interface SkillAttributes{
  id: string;
  name: string;
  url: string;
  image: string;
  description: string;
}

// type skills
type Skills =  SkillAttributes[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; data: Skills | string }>
) {
  try{
    const { query } = req;
    const lang = (query.lang && query.lang) || 'en_US';
    let categorySelect = (query.category && query.category) || 'tech';
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

    // find skill specific with filter isActive = 1 and language from value langSelect and category from value categorySelect
    const dataSkill = await Skill.findAll({
      attributes: [
        'id', 'url', 'image', 
        'skills_translation.description',
        'skills_translation.name',
      ],
      include: [{
        model: SkillTranslation,
        where: {
          language: langSelect,
          category: categorySelect,
        },
      }],
      where: { isActive: '1'},
    });

    // if dataSkill not found
    if (dataSkill.length === 0) {
      const response = { status: 404, data: "Data not found" };
      res.status(response.status).json(response);
    }else{
      // initialize template
      const skills: Skills = dataSkill.map((skill) => ({ // loop
        id: skill.dataValues.id,
        name : skill.dataValues.skills_translation.name,
        url : skill.dataValues.url,
        image: skill.dataValues.image,
        description: skill.dataValues.skills_translation.description,
      }));
      const response = { status: 200, data: skills };
      res.status(response.status).json(response);
    }
    
  }catch (error) {
    // Throw error
    console.error(error);
    const response = { status: 500, data: "Internal Server Error" };
    res.status(response.status).json(response);
  }
}