const router = require('express').Router();
const path = require('path');



// This is the 'get' route 
router.get('/', async (req, res) => {
  res.render('home');
});

router.get('/login', async (req, res) => {
  
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
 
});



router.get('/signup', async (req, res) => {
  res.render('signup');
});


router.get('/logout', async (req, res) => {
  res.render('logout');
});



module.exports = router;