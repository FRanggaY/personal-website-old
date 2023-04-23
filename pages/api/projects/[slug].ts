import type { NextApiRequest, NextApiResponse } from 'next';
// json
import ProjectDetailEngData from '@/data/locales/en_US/json/projectDetails.json'
import ProjectDetailIdData from '@/data/locales/in_ID/json/projectDetails.json'
import LanguageData from '@/data/locales/en_US/json/languages.json'

// attributes project image
interface ProjectImageAttributes {
  name: string;
  attachment: string;
}

// attribute project
interface ProjectAttribute {
  id: string;
  name: string;
  projectCreated: string;
  projectUpdated: string;
  image: string,
  description: string;
  tags?: string;
  slug: string;
  platforms: string;
  urlPreview?: string;
  urlRepository?: string;
  images: ProjectImageAttributes[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; data: ProjectAttribute | string }>
) {
  try {
    const { query } = req;
    const lang: any = (query.lang && query.lang) || 'en_US';
    const slug = (query.slug && query.slug) || '';
    const checkLanguage = await LanguageData.languages.filter((item: any) => item.title == lang);
    if (checkLanguage.length == 0) {
      // handle language error
      console.error(`Language selected : ${lang} not found or is not active.`);
      const response = { status: 400, data: "Bad Request" };
      res.status(response.status).json(response);
    } else {
      const langJson: any = {
        'en_US': ProjectDetailEngData,
        'in_ID': ProjectDetailIdData
      }
      // get data active
      let dataProjectActive = await langJson[lang].project_details;
      // filter active = 1 and slug
      let dataProject = dataProjectActive.find((item: any) => item.isActive == 1 && item.slug == slug);
      if (!dataProject) { // if data not found
        const response = { status: 404, data: "Data not found" };
        res.status(response.status).json(response);
      } else {
        // initialize template
        const project: ProjectAttribute = {
          id: dataProject.id,
          name: dataProject.name,
          projectCreated: dataProject.projectCreated,
          projectUpdated: dataProject.projectUpdated,
          image: dataProject.image,
          description: dataProject.description,
          tags: dataProject.tags,
          slug: dataProject.slug,
          platforms: dataProject.platforms,
          urlPreview: dataProject.urlPreview,
          urlRepository: dataProject.urlRepository,
          images: dataProject.images.map((item: any) => ({ // loop
            name: item.name,
            attachment: item.attachment,
          })),
        }
        const response = { status: 200, data: project };
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