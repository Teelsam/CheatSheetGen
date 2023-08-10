
const router = require('express').Router();

//const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const cssRoutes = require('./cssRoutes');
const javascriptRoutes = require('./javascriptRoutes');

router.use('/', homeRoutes);
//router.use('/api', apiRoutes);



module.exports = router;
