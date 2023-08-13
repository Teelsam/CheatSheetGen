
const router = require('express').Router();
const { User, HTML, CSS, Javascript } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
res.render('homepage', {
      current_page: 'home',
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
 res.render('project', {
      htmlResults,
      logged_in: req.session.logged_in,
      current_page: 'html' ,
   });
});

router.get('/css', async (req, res) => {

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
      current_page: 'css' ,
   })
});

router.get('/js', async (req, res) => {
   const jsData = await Javascript.findAll({
      order: [['cheatSheet_id', 'ASC']]
   });
   const jsResults = jsData.map((project) => project.get({
      plain: true,
   }));
   res.render('project', {
      jsResults,
      logged_in: req.session.logged_in,
      current_page: 'js' ,
   });
});

module.exports = router;

