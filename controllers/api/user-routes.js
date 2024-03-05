const router = require('express').Router();
const path = require('path');
const { User, Recipe } = require('../../models');

// CREATE a user
router.post('/', (req, res) => {
    // Use Sequelize's `create()` method to add a row to the table
    // Similar to `INSERT INTO` in plain SQL
    User.create({
      username: req.body.username,
      password: req.body.password,
         })
      .then((newUser) => {
        // Send the newly created row as a JSON object
        res.json(newUser);
      })
      .catch((err) => {
        res.json(err);
      });
  });

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll(); 
    res.status(200).json(users); 
  } catch (err) {
    res.status(500).json(err); 
  }
});

router.get('/:id', async (req, res) => {
  try {
    const users = await User.findByPk(req.params.id); 
    res.status(200).json(users); 
  } catch (err) {
    res.status(500).json(err); 
  }
});

router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy();

    res.status(204).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username : req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.u_id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// {
//   "username": "zachary",
//   "password": "password"
// }



  

module.exports = router;