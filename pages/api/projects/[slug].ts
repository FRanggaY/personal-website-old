import type { NextApiRequest, NextApiResponse } from 'next';
import { Project, Language, ProjectPlatform, ProjectTranslation, ProjectImage } from '@/models';

// attributes project platform
interface ProjectPlatformAttributes {
  name: string;
  urlPreview: string;
  urlRepository: string;
}

// attributes project image
interface ProjectImageAttributes {
  name: string;
  attachment: string;
}

// attribute project
interface ProjectAttribute{
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  image: string,
  description: string;
  tags?: string[];
  platforms: ProjectPlatformAttributes[];
  images: ProjectImageAttributes[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; data: ProjectAttribute | string }>
) {
  try{
    const { query } = req;

    const lang = (query.lang && query.lang) || 'en_US';
    const slug = (query.slug && query.slug) || '';
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

    // filter language specific and slug specific to get single data
    const dataProject = await Project.findOne({
      include: [
        {
          model: ProjectTranslation,
          where: {
            language: langSelect,
            slug: slug
          }
        },
        {
          model: ProjectPlatform,
        },
        {
          model: ProjectImage,
        },
      ],
      where: { isActive: '1'},
    });

    // if dataProject not found
    if (!dataProject) {
      const response = { status: 404, data: "Data not found" };
      res.status(response.status).json(response);
    }else{
      // initialize template
      const project: ProjectAttribute = {
        id: dataProject.dataValues.id,
        name: dataProject.dataValues.projects_translation.name,
        createdAt: dataProject.dataValues.projects_translation.createdAt,
        updatedAt: dataProject.dataValues.projects_translation.updatedAt,
        image: dataProject.dataValues.image,
        description: dataProject.dataValues.projects_translation.description,
        tags: dataProject.dataValues.projects_translation.tags,
        platforms: dataProject.dataValues.projects_platforms.map((platform:any) => ({ // loop
          name: platform.dataValues.name,
          urlPreview: platform.dataValues.urlPreview,
          urlRepository: platform.dataValues.urlRepository,
        }) ),
        images: dataProject.dataValues.projects_images.map((image:any) => ({ // loop
          name: image.dataValues.name,
          attachment: image.dataValues.attachment,
        }) ),
      };
      const response = { status: 200, data: project };
      res.status(response.status).json(response);
    }
    
  }catch (error) {
    // Throw error
    console.error(error);
    const response = { status: 500, data: "Internal Server Error" };
    res.status(response.status).json(response);
  }
}