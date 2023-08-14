const router = require('express').Router();
const cheatsheetRoutes = require('./cheatsheetRoutes.js');
const userRoutes = require('./userRoutes.js');

router.use('/user', userRoutes);
router.use('/cheatsheet', cheatsheetRoutes);

module.exports = router;
