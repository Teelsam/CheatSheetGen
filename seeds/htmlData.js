const { HTML } = require('../models');

const htmlData = [
    {

        CheatSheet_Name: '<h1>',
        CheatSheet_Cheats: "Header elements go from size 1-6",
        User_id: 1
    },
    {

        CheatSheet_Name: '<title>',
        CheatSheet_Cheats: "Gives your websites tab a name",
        User_id: 2
    },
    {
        CheatSheet_Name: 'HTML',
        CheatSheet_Cheats: "Stands for Hyper Text Markup Lnaguage",
        User_id: 2
    },
    {
        CheatSheet_Name: '<br>',
        CheatSheet_Cheats: "Element for inserting a line break",
        User_id: 2
    },
    {
        CheatSheet_Name: '<strong>',
        CheatSheet_Cheats: "Element to define important text",
        User_id: 2
    }, {
        CheatSheet_Name: '<em>',
        CheatSheet_Cheats: "Element to define emphasized text",
        User_id: 2
    }, {
        CheatSheet_Name: '<a>',
        CheatSheet_Cheats: "Element used to create a link ",
        User_id: 2
    }, {
        CheatSheet_Name: '<p>',
        CheatSheet_Cheats: "Element used to create a paragraph",
        User_id: 2
    }, {
        CheatSheet_Name: '<footer>',
        CheatSheet_Cheats: "Element creates a section typically for site author",
        User_id: 2
    }, {
        CheatSheet_Name: '<nav>',
        CheatSheet_Cheats: "Element creates a section for linking to sites pages",
        User_id: 2
    },
];
const seedHtml = () => HTML.bulkCreate(htmlData);
module.exports = seedHtml;