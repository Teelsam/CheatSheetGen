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
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;