// Import express library and create a router instance.
const router = require('express').Router();

// Import the routes defined in 'userRoutes.js'.
const userRoutes = require('./userRoutes.js');

// Use the imported 'userRoutes' for any routes that start with '/user'.
router.use('/user', userRoutes);

// Export the router to be used by the main application.
module.exports = router;
