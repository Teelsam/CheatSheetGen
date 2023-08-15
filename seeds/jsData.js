// Import the JavaScript model
const { Javascript } = require('../models');

// Define an array of Javascript cheat sheet data objects
const jsData = [
    {

        CheatSheet_Name: 'let as a var',
        CheatSheet_Cheats: 'let is 1 of 2 variables in Javascript',
        User_id: 1
    },

    {

        CheatSheet_Name: 'const',
        CheatSheet_Cheats: "const is a variable in javascript which is more strict",
        User_id: 1
    },

    {
        CheatSheet_Name: 'if',
        CheatSheet_Cheats: "Checks to see if an expression is true",
        User_id: 1
    },

    {
        CheatSheet_Name: 'else if',
        CheatSheet_Cheats: "Checks to see if an expression is true, after the first check failed",
        User_id: 1
    },

    {
        CheatSheet_Name: 'else',
        CheatSheet_Cheats: "Checks to see if an expression is true, as a final option",
        User_id: 1
    },

    {
        CheatSheet_Name: 'function ()',
        CheatSheet_Cheats: "Creates a scoped grouping of code which can be run by calling the function",
        User_id: 1
    },

    {
        CheatSheet_Name: 'while loop',
        CheatSheet_Cheats: "Checks an expression and while it is true, perform specified actions",
        User_id: 1
    },

    {
        CheatSheet_Name: 'Switch Statement',
        CheatSheet_Cheats: "Checks an expression against various cases, which each contain a break. Else runs default",
        User_id: 1
    },

    {
        CheatSheet_Name: 'document.getElementById',
        CheatSheet_Cheats: "Connects html Element to the javascript file",
        User_id: 1
    },

    {
        CheatSheet_Name: 'x++',
        CheatSheet_Cheats: "A variable with ++ increases that variables value by 1",
        User_id: 1
    },
    {
        CheatSheet_Name: 'fetch',
        CheatSheet_Cheats: "function fetches content from a server",
        User_id: 2
    },

];

// Define a function to seed the Javascript data into the database
const seedJs = () => Javascript.bulkCreate(jsData);

// Export the seedJs function to be used in other parts of the application
module.exports = seedJs;