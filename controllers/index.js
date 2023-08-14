// Import express library and create a router instance.
const router = require('express').Router();

// Import the routes for both API and home-related routes.
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Use the imported routes for the root and '/api' paths.
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Export the router to be used by the main application.
module.exports = router;
