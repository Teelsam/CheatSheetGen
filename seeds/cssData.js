// Import the CSS model
const { CSS } = require('../models');

// Define an array of CSS cheat sheet data objects
const cssData = [
    {
        CheatSheet_Name: 'Color:',
        CheatSheet_Cheats: "Sets the color of that element",
        User_id: 1
    },

    {
        CheatSheet_Name: 'background-color:',
        CheatSheet_Cheats: "Sets the background color of that element",
        User_id: 2
    },

    {
        CheatSheet_Name: 'font-weight',
        CheatSheet_Cheats: "Sets the fonts boldness",
        User_id: 2
    },

    {
        CheatSheet_Name: 'font-size',
        CheatSheet_Cheats: "Sets the fonts size",
        User_id: 2
    },

    {
        CheatSheet_Name: 'width',
        CheatSheet_Cheats: "Sets the width of specified section",
        User_id: 2
    },

    {
        CheatSheet_Name: 'border-style',
        CheatSheet_Cheats: "Sets the borders style",
        User_id: 2
    },

    {
        CheatSheet_Name: 'Padding',
        CheatSheet_Cheats: "Sets the spacing inside a section",
        User_id: 2
    },

    {
        CheatSheet_Name: 'Margin',
        CheatSheet_Cheats: "Sets the spacing outside the section",
        User_id: 2
    },

    {
        CheatSheet_Name: 'font-family',
        CheatSheet_Cheats: "Sets the style of the font in the section",
        User_id: 2
    },

    {
        CheatSheet_Name: 'text-align',
        CheatSheet_Cheats: "Sets which side text should be place in relation to the section",
        User_id: 2
    },
    {
        CheatSheet_Name: 'Visibiliy',
        CheatSheet_Cheats: "Sets if the content can be seen",
        User_id: 2
    },

];
// Define a function to seed the CSS data into the database
const seedCss = () => CSS.bulkCreate(cssData);

// Export the seedCss function to be used in other parts of the application
module.exports = seedCss;