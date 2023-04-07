const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage:  process.env.SQLITE_URL
});

// Education model
class Education extends Model {}
Education.init({
  logo: DataTypes.STRING,
  url: DataTypes.STRING,
  createdAt: DataTypes.STRING,
  updatedAt: DataTypes.STRING,
  isActive: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'educations'
});

// EducationTranslation model
class EducationTranslation extends Model {}
EducationTranslation.init({
  educationId: DataTypes.STRING,
  language: DataTypes.STRING,
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  degree: DataTypes.STRING,
  fieldOfStudy: DataTypes.STRING,
  location: DataTypes.STRING,
  grade: DataTypes.STRING,
  startDate: DataTypes.STRING,
  endDate: DataTypes.STRING,
  createdAt: DataTypes.STRING,
  updatedAt: DataTypes.STRING
}, {
  sequelize,
  modelName: 'educations_translations'
});

// Experience model
class Experience extends Model {}
Experience.init({
  image: DataTypes.STRING,
  url: DataTypes.STRING,
  createdAt: DataTypes.STRING,
  updatedAt: DataTypes.STRING,
  isActive: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'experiences'
});

// ExperienceTranslation model
class ExperienceTranslation extends Model {}
ExperienceTranslation.init({
  experienceId: DataTypes.STRING,
  language: DataTypes.STRING,
  name: DataTypes.STRING,
  employmentType: DataTypes.STRING,
  companyName: DataTypes.STRING,
  location: DataTypes.STRING,
  locationType: DataTypes.STRING,
  startDate: DataTypes.STRING,
  endDate: DataTypes.STRING,
  industry: DataTypes.STRING,
  createdAt: DataTypes.STRING,
  updatedAt: DataTypes.STRING
}, {
  sequelize,
  modelName: 'experiences_translations'
});

// Skill model
class Skill extends Model {}
Skill.init({
  url: DataTypes.STRING,
  image: DataTypes.STRING,
  createdAt: DataTypes.STRING,
  updatedAt: DataTypes.STRING,
  isActive: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'skills'
});

// SkillTranslation model
class SkillTranslation extends Model {}
SkillTranslation.init({
  skillId: DataTypes.STRING,
  language: DataTypes.STRING,
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  category: DataTypes.STRING,
  createdAt: DataTypes.STRING,
  updatedAt: DataTypes.STRING
}, {
  sequelize,
  modelName: 'skills_translations'
});

// Project model
class Project extends Model {}
Project.init({
  image: DataTypes.STRING,
  createdAt: DataTypes.STRING,
  updatedAt: DataTypes.STRING,
  isActive: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'projects'
});

// ProjectTranslation model
class ProjectTranslation extends Model {}
ProjectTranslation.init({
  projectId: DataTypes.STRING,
  language: DataTypes.STRING,
  name: DataTypes.STRING,
  slug: DataTypes.STRING,
  description: DataTypes.STRING,
  tags: DataTypes.STRING,
  createdAt: DataTypes.STRING,
  updatedAt: DataTypes.STRING
}, {
  sequelize,
  modelName: 'projects_translations'
});

// ProjectImage model
class ProjectImage extends Model {}
ProjectImage.init({
  projectId: DataTypes.STRING,
  name: DataTypes.STRING,
  attachment: DataTypes.STRING,
  createdAt: DataTypes.STRING,
  updatedAt: DataTypes.STRING
}, {
  sequelize,
  modelName: 'projects_images'
});

// ProjectPlatform model
class ProjectPlatform extends Model {}
ProjectPlatform.init({
  projectId: DataTypes.STRING,
  name: DataTypes.STRING,
  logo: DataTypes.STRING,
  urlPreview: DataTypes.STRING,
  urlRepository: DataTypes.STRING,
  createdAt: DataTypes.STRING,
  updatedAt: DataTypes.STRING
}, {
  sequelize,
  modelName: 'projects_platforms'
});

// Language model
class Language extends Model {}
Language.init({
  title: DataTypes.STRING,
  name: DataTypes.STRING,
  proficieny: DataTypes.STRING,
  image: DataTypes.STRING,
  createdAt: DataTypes.STRING,
  updatedAt: DataTypes.STRING,
  isActive: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'languages'
});

// SocialMedia model
class SocialMedia extends Model {}
SocialMedia.init({
  name: DataTypes.STRING,
  username: DataTypes.STRING,
  url: DataTypes.STRING,
  image: DataTypes.STRING,
  logo: DataTypes.STRING,
  createdAt: DataTypes.STRING,
  updatedAt: DataTypes.STRING,
  isActive: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'social_media'
});

// association education relationship
Education.hasOne(EducationTranslation, { foreignKey: 'educationId' });
EducationTranslation.belongsTo(Education, { foreignKey: 'educationId' });

// association education relationship
Experience.hasOne(ExperienceTranslation, { foreignKey: 'experienceId' });
ExperienceTranslation.belongsTo(Experience, { foreignKey: 'experienceId' });

// association skill relationship
Skill.hasOne(SkillTranslation, { foreignKey: 'skillId' });
SkillTranslation.belongsTo(Skill, { foreignKey: 'skillId' });

// association project relationship
Project.hasOne(ProjectTranslation, { foreignKey: 'projectId' });
ProjectTranslation.belongsTo(Project, { foreignKey: 'projectId' });
Project.hasMany(ProjectImage, { foreignKey: 'projectId' });
ProjectImage.belongsTo(Project, { foreignKey: 'projectId' });
Project.hasMany(ProjectPlatform, { foreignKey: 'projectId' });
ProjectPlatform.belongsTo(Project, { foreignKey: 'projectId' });

module.exports = { 
  Education, EducationTranslation, 
  Experience, ExperienceTranslation, 
  Skill, SkillTranslation,
  Project, ProjectTranslation, ProjectImage, ProjectPlatform,
  SocialMedia, Language, sequelize };
