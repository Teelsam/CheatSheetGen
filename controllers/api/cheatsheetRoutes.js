const router = require('express').Router();
const { HTML, CSS, Javascript} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/html', async (req,res) => {
    
    try {
const newHtml = await HTML.create({
    ...req.body,

    user_id: req.session.user_id,
    
});

res.status(200).json(newHtml);
} catch (err) {
res.status(400).json(err);
}
});

module.exports = router;