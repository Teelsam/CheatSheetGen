// Import express library and create a router instance.
const router = require('express').Router();

// Import the User model.
const { User } = require('../../models');

// Route to handle user signup.
router.post('/signup', async (req, res) => {
    console.log(req.body);
    try {
        const { username, email, password } = req.body;

        // Check if required data is provided.
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Incomplete data' });
        }

        // Create a new user using the User model.
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

// Route to handle user login.
router.post('/login', async (req, res) => {
    try {
        console.log('req.body: ', req.body);
        // Find a user based on the provided email.
        const userData = await User.findOne({ where: { email: req.body.email } });
        console.log(userData);

        if (!userData) {
            // Return an error response if the user is not found.
            res.status(400).json({ message: 'Incorrect email or password, try again' });
            return;
        }

        // Check if the provided password matches the user's stored password.
        const validPassword = await userData.checkPassword(req.body.password);
        console.log(validPassword);

        if (!validPassword) {
            // Return an error response if the password is incorrect.
            res.status(400).json({ message: 'Incorrect email or password, try again' });
            return;
        }

        // Save user session information and send a success response.
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

// Route to handle user logout.
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        // Destroy the session upon successful logout.
        req.session.destroy(() => {
            res.json({ message: "Successfully Logged Out!" });
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// Export the router to be used by the main application.
module.exports = router;
