const { Javascript } = require('../models');

const jsData = [
    {
      
        CheatSheet_Name: 'let as a var',
        CheatSheet_Cheats: 'let is 1 of 2 variables in Javascript',
        User_id: 1
    },
    {
       
        CheatSheet_Name: 'const',
        CHeatSheet_Cheats: "const is a variable in javascript which is more strict",
        User_id: 1
    },

];
const seedJs = () => Javascript.bulkCreate(jsData);
module.exports = seedJs;