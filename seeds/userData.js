const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: 'bugsRCool',
        email: 'iLuvBugs@gmail.com',
        password: 'password',
    },
    {
        id: 2,
        username: "leetFreak",
        email: "11001@gmail.com",
        password: 'password'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;