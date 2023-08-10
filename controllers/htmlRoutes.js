const router = require('express').Router();
const { HTML } = require('../models');
const withAuth = require('../utils/auth');

router.get('/html', withAuth, async (req, res) => {

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
})