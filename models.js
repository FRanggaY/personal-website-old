const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage:  process.env.SQLITE_URL
});

class Education extends Model {}
Education.init({
  title: DataTypes.STRING,
  degree: DataTypes.STRING,
  fieldOfStudy: DataTypes.STRING,
  location: DataTypes.STRING,
  startDate: DataTypes.STRING,
  endDate: DataTypes.STRING,
  description: DataTypes.STRING,
  logo: DataTypes.STRING,
  createdAt: DataTypes.STRING,
  updatedAt: DataTypes.STRING,
  isActive: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'education'
});

module.exports = { Education, sequelize };
