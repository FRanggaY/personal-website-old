import type { NextApiRequest, NextApiResponse } from 'next';
import { Project, Language, ProjectPlatform, ProjectTranslation } from '@/models';

// attributes project platform
interface ProjectPlatformAttributes {
  name: string;
  urlPreview: string;
  urlRepository: string;
  logo: string;
}

// attributes project
interface ProjectAttributes{
  id: string;
  name: string;
  updatedAt: string;
  slug: string;
  image: string;
  platforms: ProjectPlatformAttributes[];
}

// type projects
type Projects = {
  title: string;
  description?: string; // optional
  projects: ProjectAttributes[];
  total: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; data: Projects | string }>
) {
  try{
    const { query } = req;
    const { page = 1, perPage = 15 } = req.query;

    const offset = (Number(page) - 1) * Number(perPage);
    const limit = Number(perPage);

    const lang = (query.lang && query.lang) || 'en_US';
    const targetPlatform = (query.platform && query.platform) || 'website';
    // find language specific with filter isActive = 1
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

    // filter language specific and platform specific with pagination
    const { count, rows } = await Project.findAndCountAll({
      include: [
        {
          model: ProjectTranslation,
          where: {
            language: langSelect
          }
        },
        {
          model: ProjectPlatform,
          where: {
            name: targetPlatform
          }
        },
      ],
      where: { isActive: '1'},
      limit,
      offset
    });

    // if dataProject not found
    if (rows.length === 0) {
      const response = { status: 404, data: "Data not found" };
      res.status(response.status).json(response);
    }else{
      // initialize template
      const projects: Projects = {
        title: "My Experience", // can change
        description: "", // can change
        projects: rows.map((project) => ({ // loop
          id: project.dataValues.id,
          name: project.dataValues.projects_translation.name,
          updatedAt: project.dataValues.projects_translation.updatedAt,
          slug: project.dataValues.projects_translation.slug,
          image: project.dataValues.image,
          platforms: project.dataValues.projects_platforms.map((platform:any) => ({ // loop
            name: platform.dataValues.name,
            urlPreview: platform.dataValues.urlPreview,
            urlRepository: platform.dataValues.urlRepository,
            logo: platform.dataValues.logo
          }) )
        })),
        total: {
          'currentPage': page,
          'totalRowsInPage' : perPage,
          'totalRows' : count
        }
      };
      const response = { status: 200, data: projects };
      res.status(response.status).json(response);
    }
    
  }catch (error) {
    // Throw error
    console.error(error);
    const response = { status: 500, data: "Internal Server Error" };
    res.status(response.status).json(response);
  }
}