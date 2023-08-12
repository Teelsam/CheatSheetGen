const { User } = require('../models');

const userData = [
    {
        username: 'bugsRCool',
        email: 'iLuvBugs@gmail.com',
        password: 'password',
    },
    {
        username: "leetFreak",
        email: "11001@gmail.com",
        password: 'password'
    }, {
        username: "keyBoardKing",
        email: "56563@gmail.com",
        password: 'password'
    }, {
        username: "AppleMouseAficionado",
        email: "56564@gmail.com",
        password: 'password'
    }, {
        username: "processorProcessing",
        email: "couldBeBites@gmail.com",
        password: 'password'
    }, {
        username: "TundraTiger",
        email: "youveGotMail@gmail.com",
        password: 'password'
    }, {
        username: "aSmallTwig",
        email: "156ThousandTwigs@gmail.com",
        password: 'password'
    }, {
        username: "HairyHarry1",
        email: "soManyLetters@gmail.com",
        password: 'password'
    }, {
        username: "Dr.Ghost",
        email: "ghostDoctor@gmail.com",
        password: 'password'
    }, {
        username: "oneOrTwoCats",
        email: "meow@gmail.com",
        password: 'password'
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;