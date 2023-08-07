const router = require('express').Router();

router.get('/', (req, res) => {
        res.render('homepage');
     });

     router.get('/login', (req, res) => {
        res.render('login');
     });

     router.get('/signup', (req, res) => {
        res.render('signup');
     });

     router.get('/main', (req, res) => {
      res.render('project');
   });



     module.exports = router;