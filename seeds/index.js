// Import the Sequelize connection instance
const sequelize = require('../config/connection');

// Import the seed functions for user, css, html, and javascript data
const seedUser = require('./userData');
const seedCss = require('./cssData');
const seedHtml = require('./htmlData');
const seedJs = require('./jsData');

// Define the seedAll function
const seedAll = async () => {
    // Sync the Sequelize models with the database and force sync
    await sequelize.sync({ force: true });

    // Call each seed function to populate respective data
    await seedUser();
    await seedCss();
    await seedHtml();
    await seedJs();

    // Exit the process when seeding is done
    process.exit(0);
};

// Call the seedAll function to initiate the seeding process
seedAll();
