// Import required modules and set up the CSS model using Sequelize.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the CSS model class.
class CSS extends Model { }

// Initialize the CSS model with its properties.
CSS.init(
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
    modelName: 'CSS',        // Set the model name in singular form.
  }
);

// Export the CSS model to be used in other parts of the application.
module.exports = CSS;
