const router = require('express').Router();
const path = require('path');
const { User, Recipe } = require('../../models');


router.post('/', (req, res) => {
    console.log("add recipe route");
    // Use Sequelize's `create()` method to add a row to the table
    // Similar to `INSERT INTO` in plain SQL
    Recipe.create({
      title: req.body.title,
      ingredients: req.body.youringredients,
      instructions: req.body.yourinstructions,
      user_id: req.session.user_id
         })
      .then((newRecipe) => {
        // Send the newly created row as a JSON object
        res.json(newRecipe);
      })
      .catch((err) => {
        res.json(err);
      });
  });



module.exports = router;