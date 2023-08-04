const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class HTML extends Model { }


HTML.init(
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
        Creator_id: {
            type: DataTypes.INTEGER
        }
    }
)