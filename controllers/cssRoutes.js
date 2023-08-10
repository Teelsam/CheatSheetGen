const router = require('express').Router();
const { CSS } = require('../models');
const withAuth = require('../utils/auth');

router.get('/css', withAuth, async (req, res) => {

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
})