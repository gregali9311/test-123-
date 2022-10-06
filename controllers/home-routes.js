const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('login');
});

router.get('/cards', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('cardpage');
});

router.get('/newmood', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('addnewmood');
});


module.exports = router;
