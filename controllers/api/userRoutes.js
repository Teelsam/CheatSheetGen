const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
    console.log(req.body)
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Incomplete data' });
        }

        const newUser = await User.create({
            username,
            email,
            password
        });

        res.status(201).json(newUser);

    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});


router.post('/login', async (req, res) => {
    try {
        console.log('req.body: ', req.body)
        const userData = await User.findOne({ where: { email: req.body.email } });
        console.log(userData);

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        console.log(validPassword);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Logged in!', sessionInfo: req.session });
        });

    } catch (err) {
        console.log("err: ", err.message);
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.json({message: "Sucessfully Logged Out!"});
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;