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
  typeData: DataTypes.STRING,
  createdAt: DataTypes.STRING,
  updatedAt: DataTypes.STRING
}, {
  sequelize,
  modelName: 'skills_translations'
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

// Define association
Education.hasOne(EducationTranslation, { foreignKey: 'educationId' });
EducationTranslation.belongsTo(Education, { foreignKey: 'educationId' });
Experience.hasOne(ExperienceTranslation, { foreignKey: 'experienceId' });
ExperienceTranslation.belongsTo(Experience, { foreignKey: 'experienceId' });
Skill.hasOne(SkillTranslation, { foreignKey: 'skillId' });
SkillTranslation.belongsTo(Skill, { foreignKey: 'skillId' });

module.exports = { 
  Education, EducationTranslation, 
  Experience,ExperienceTranslation, 
  Skill, SkillTranslation,
  Language, sequelize };
