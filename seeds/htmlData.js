const { HTML } = require('../models');

const htmlData = [
    {
        cheatSheet_id: 1,
        CheatSheet_Name: '<h1>',
        CheatSheet_Cheats: "Header elements go from size 1-6",
        User_id: 1
    },
    {
        cheatSheet_id: 2,
        CheatSheet_Name: '<h1>',
        CheatSheet_Cheats: "Header elements go from size 1-6",
        User_id: 2
    }
]
const seedHtml = () => HTML.bulkCreate(htmlData);
module.exports = seedHtml;