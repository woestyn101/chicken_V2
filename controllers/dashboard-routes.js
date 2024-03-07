const router = require('express').Router();
const path = require('path');
const { User, Recipe } = require('../models');
const withAuth = require('../utils/auth');

// This is the 'get' route 
router.get('/', withAuth, async (req, res) => {
 
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Recipe }],
    });

    

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
    

   

  
});

module.exports = router;