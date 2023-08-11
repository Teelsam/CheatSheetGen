const { CSS } = require('../models');

const cssData = [
    {
        CheatSheet_Name: '#id',
        CHeatSheet_Cheats: "# and then the name of the HTML id allows you to style specific element",
        User_id: 1
    },
    {
        CheatSheet_Name: '::hover',
        CheatSheet_Cheats: "hover gives a second set of styles to an element which is changed when the mouse hovers over it",
        User_id: 2
    },

];

const seedCss = () => CSS.bulkCreate(cssData);
module.exports = seedCss;