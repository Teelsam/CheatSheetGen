const { Javascript } = require('../models');

const jsData = [
    {
        cheatSheet_id: 1,
        CheatSheet_Name: 'let as a var',
        CheatSheet_Cheats: 'let is 1 of 2 variables in Javascript',
        User_id: 1
    }
];
const seedJs = () => Javascript.bulkCreate(jsData);
module.exports = seedJs;