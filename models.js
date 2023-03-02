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

// Language model
class Language extends Model {}
Language.init({
  title: DataTypes.STRING,
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

module.exports = { Education, EducationTranslation, Language, sequelize };
