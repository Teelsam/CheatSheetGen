const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedCss = require('./cssData');
const seedHtml = require('./htmlData');
const seedJs = require('./jsData');


const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedCss();

    await seedHtml();

    await seedJs();

    process.exit(0);
};

seedAll();
