const { CSS } = require('../models');

const cssData = [
    {
        cheatSheet_id: 1,
        CheatSheet_Name: '#id',
        CHeatSheet_Cheats: "# and then the name of the HTML id allows you to style specific element",
        User_id: 1
    }
];

const seedCss = () => CSS.bulkCreate(cssData);
module.exports = seedCss;