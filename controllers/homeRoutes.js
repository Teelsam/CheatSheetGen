// Import the 'express' library and create a router instance.
const router = require('express').Router();

// Import the necessary models and middleware.
const { User, HTML, CSS, Javascript } = require('../models');
const withAuth = require('../utils/auth');

// Route to the homepage.
router.get('/', async (req, res) => {
   res.render('homepage', {
      current_page: 'home',
      logged_in: req.session.logged_in,
   });
});

// Route to the signup page.
router.get('/signup', (req, res) => {
   res.render('signup', { current_page: 'signup' });
});

// Route to the login page.
router.get('/login', (req, res) => {
   if (req.session.logged_in) {
      res.redirect('/');
      return;
   }

   res.render('login', { current_page: 'login' });
});

// Route to display HTML cheat sheets.
router.get('/html', withAuth, async (req, res) => {
   const htmlData = await HTML.findAll({
      order: [['cheatSheet_id', 'ASC']],
   });
   const htmlResults = htmlData.map((project) => project.get({
      plain: true,
   }));
   res.render('project', {
      htmlResults,
      logged_in: req.session.logged_in,
      current_page: 'html',
   });
});

// Route to display CSS cheat sheets.
router.get('/css', withAuth, async (req, res) => {

   const cssData = await CSS.findAll({
      order: [['cheatSheet_id', 'ASC']]
   });
   const cssResults = cssData.map((project) => project.get({
      plain: true,
   }));
   console.log("===================")
   console.log(cssResults)
   res.render('project', {
      cssResults,
      logged_in: req.session.logged_in,
      current_page: 'css',
   })
});

// Route to display JavaScript cheat sheets.
router.get('/js', withAuth, async (req, res) => {
   const jsData = await Javascript.findAll({
      order: [['cheatSheet_id', 'ASC']]
   });
   const jsResults = jsData.map((project) => project.get({
      plain: true,
   }));
   res.render('project', {
      jsResults,
      logged_in: req.session.logged_in,
      current_page: 'js',
   });
});

// Route to the page for adding references.
router.get('/addrefrence', (req, res) => {
   res.render('addrefrence', { current_page: 'addrefrence' });
});

// Export the router to be used by the main application.
module.exports = router;

