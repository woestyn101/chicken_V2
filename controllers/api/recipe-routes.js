const { Model, DataTypes } = require('sequelize');
const router = require('express').Router();
const path = require('path');
const { Recipe } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.findAll(); 
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ error: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    res.status(200).json(newRecipe); 
  } catch (err) {
    res.status(400).json(err); 
  }
});

// {
//   "title": "zachary",
//   "ingredients": "password, oaishjd "
//   }

module.exports = router;