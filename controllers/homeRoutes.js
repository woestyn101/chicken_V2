const router = require('express').Router();
const path = require('path');
const { User, Recipe } = require('../models');



// This is the 'get' route 
router.get('/', async (req, res) => {
  
  try {
    // Get all projects and JOIN with user data
    const recipePostData = await Recipe.findAll({
      include: [User],
    });

    // Serialize data so the template can read it
    const recipeposts = recipePostData.map((recipepost) => recipepost.get({ plain: true }));

    

    //Pass serialized data and session flag into template
    res.render('home', { 
      recipeposts, 
      logged_in: req.session.logged_in 
    });
  }
  
  catch (err) {
    res.status(500).json(err);
  }
  //res.render('home');
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