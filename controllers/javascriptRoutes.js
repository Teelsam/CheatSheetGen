const router = require('express').Router();
const { Javascript } = require('../models');
const withAuth = require('../utils/auth');

router.get('/javascript', withAuth, async (req, res) => {
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
})