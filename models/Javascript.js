// Import required modules and set up the Javascript model using Sequelize.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the Javascriot model class.
class Javascript extends Model { }

// Initialize the Javascript model with its properties.
Javascript.init(
  {
    cheatSheet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    CheatSheet_Name: {
      type: DataTypes.STRING,
    },
    CheatSheet_Cheats: {
      type: DataTypes.STRING,
    },
    User_id: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    freezeTableName: true,   // Ensure that the table name matches the model name.
    underscored: true,       // Use snake_case for column names.
    modelName: 'Javascript', // Set the model name in singular form.
  }
);

// Export the Javascript model to be used in other parts of the application.
module.exports = Javascript;
