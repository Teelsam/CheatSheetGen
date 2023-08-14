// Import express library and create a router instance.
const router = require('express').Router();
const cheatsheetRoutes = require('./cheatsheetRoutes.js');
// Import the routes defined in 'userRoutes.js'.
const userRoutes = require('./userRoutes.js');

// Use the imported 'userRoutes' for any routes that start with '/user'.
router.use('/user', userRoutes);
router.use('/cheatsheet', cheatsheetRoutes);

// Export the router to be used by the main application.
module.exports = router;
