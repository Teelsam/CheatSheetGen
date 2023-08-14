// Middleware function to check if the user is authenticated
const withAuth = (req, res, next) => {
  // Log the current session details
  console.log({ session: req.session });

  // Check if the user is logged in 
  if (!req.session.logged_in) {
    // If not logged in, redirect the user to the signup page
    res.redirect('/signup');
  } else {
    // If logged in, allow the request to proceed to the next middleware or route handler
    next();
  }
};

// Export the withAuth middleware function
module.exports = withAuth;
