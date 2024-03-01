const { Model, DataTypes } = require('sequelize');
const router = require('express').Router();
const path = require('path');
const { Recipe } = require('../../models');



router.post('/', (req, res) => {
    console.log("add recipe route");
    // Use Sequelize's `create()` method to add a row to the table
    // Similar to `INSERT INTO` in plain SQL
    Recipe.create({
      title: req.body.title,
      ingredients: req.body.userIngredients,
      instructions: req.body.userInstructions,
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



router.delete('/:id', async (req, res) =>{
  try {
    const recipeId = req.params.id;
    const recipe = await Recipe.findByPk(recipeId);
    
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    await recipe.destroy();
    res.status(204).end(); 
  } catch (error) {
    res.status(500).json(err);
  }
});

// {
//   "title": "pp",
//   "ingredients": "pppppppppppppppppp ",
// 	"instructions": "pppppppppppppppppppp"
// }


module.exports = router;