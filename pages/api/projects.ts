import type { NextApiRequest, NextApiResponse } from 'next';
// json
import ProjectEngData from '@/data/locales/en_US/json/projects.json'
import ProjectIdData from '@/data/locales/in_ID/json/projects.json'
import LanguageData from '@/data/locales/en_US/json/languages.json'

// attributes project
interface ProjectAttributes {
  id: string;
  name: string;
  updatedAt: string;
  slug: string;
  image: string;
}

// type projects
type Projects = {
  projects: ProjectAttributes[];
  total: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; data: Projects | string }>
) {
  try {
    // initialize
    const { query } = req;
    const { page = 1, perPage = 4 } = req.query;
    const lang:any = (query.lang && query.lang) || 'en_US';
    const targetPlatform = (query.platform && query.platform) || 'all';
    const checkLanguage = await LanguageData.languages.filter((item:any) => item.title == lang);
    if(checkLanguage.length == 0){
      // handle language error
      console.error(`Language selected : ${lang} not found or is not active.`);
      const response = { status: 400, data: "Bad Request" };
      res.status(response.status).json(response);
    }else{
      const langJson:any = {
        'en_US': ProjectEngData,
        'in_ID': ProjectIdData
      }
      // get data active
      let dataProjectActive = await langJson[lang].projects;
      // filter active = 1
      let dataProject = dataProjectActive.filter((item:any) => item.isActive == 1);
      if(targetPlatform != 'all'){
        dataProject = dataProject.filter((item:any) => item.platform == targetPlatform);
      }
  
      // pagination
      const start_index = (Number(page) - 1) * Number(perPage)
      const end_index: number = start_index + Number(perPage)
  
      const totalRows = dataProject.length
      const totalPages = Math.ceil(totalRows / Number(perPage))
  
      const projectItemRow = dataProject.slice(start_index, end_index)
  
      // if dataProject not found
      if (projectItemRow.length === 0) {
        const response = { status: 404, data: "Data not found" };
        res.status(response.status).json(response);
      } else {
        // initialize template
        const projects: Projects = {
          // sort by desc projectUpdated
          projects: projectItemRow.sort((a:any, b:any) => b.projectUpdated.localeCompare(a.projectUpdated)).map((item:any) => ({ // loop
            id: item.id,
            name: item.name,
            projectUpdated: item.projectUpdated,
            slug: item.slug,
            image: item.image,
          })),
          total: {
            'currentPage': page,
            'totalRowsInPage': perPage,
            'totalRows': totalRows,
            'totalPages': totalPages
          }
        };
        const response: any = { status: 200, data: projects };
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