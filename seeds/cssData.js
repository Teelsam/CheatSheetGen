const { CSS } = require('../models');

const cssData = [
    {
        cheatSheet_id: 1,
        CheatSheet_Name: '<h1>',
        CheatSheet_Cheats: "Header elements go from size 1-6",
        User_id: 1
    },
    {
        cheatSheet_id: 2,
        CheatSheet_Name: '<title>',
        CheatSheet_Cheats: "Gives your websites tab a name",
        User_id: 2
    }

];

const seedCss = () => CSS.bulkCreate(cssData);
module.exports = seedCss;