
const router = require('express').Router();
const { User, HTML, CSS, Javascript } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {

   const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
   });

   const users = userData.map((project) => project.get({
      plain: true
   }));

   res.render('homepage', {
      current_page: 'home',
      users,
      logged_in: req.session.logged_in,
   });
});

router.get('/signup', (req, res) => {
   res.render('signup', { current_page: 'signup' });
});

router.get('/login', (req, res) => {
   if (req.session.logged_in) {
      res.redirect('/');
      return;
   }

   res.render('login', { current_page: 'login' });
});

router.get('/html', async (req, res) => {

   const htmlData = await HTML.findAll({
      order: [['cheatSheet_id', 'ASC']],
   });
   const htmlResults = htmlData.map((project) => project.get({
      plain: true,

   }));


   res.render('html', {
      htmlResults,
      logged_in: req.session.logged_in,

   });
});

router.get('/css', async (req, res) => {

   const cssData = await CSS.findAll({
      order: [['cheatSheet_id', 'ASC']]
   });
   const cssResults = cssData.map((project) => project.get({
      plain: true
   }));
   res.render('css', {
      cssResults,
      logged_in: req.session.logged_in,
   })
});

router.get('/javascript', async (req, res) => {
   const jsData = await Javascript.findAll({
      order: [['cheatSheet_id', 'ASC']]
   });
   const jsResults = jsData.map((project) => project.get({
      plain: true,
   }));
   res.render('jss', {
      jsResults,
      logged_in: req.session.logged_in,
   });
});

module.exports = router;
