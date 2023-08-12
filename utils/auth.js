// const withAuth = (req, res, next) => {
//     console.log({session: req.session});
//     if (!req.session.logged_in) {
//       res.redirect('/signup');
//     } else {
//       next();
//     }
//   };
  
//   module.exports = withAuth;