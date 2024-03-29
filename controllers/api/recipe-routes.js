const { Model, DataTypes } = require('sequelize');
const router = require('express').Router();
const path = require('path');
const { User, Recipe } = require('../../models');
const withAuth = require('../../utils/auth');



router.post('/', (req, res) => {
    // console.log(req.body.title);
    // console.log(req.body.userIngredients);
    // console.log(req.body.userInstructions);
    // console.log(req.session.user_id);
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

router.get('/:id', withAuth, async (req, res) => {
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



// router.delete('/:id', async (req, res) =>{
//   try {
//     const recipeId = req.params.id;
//     const recipe = await Recipe.findByPk(recipeId);
    
//     if (!recipe) {
//       return res.status(404).json({ error: 'Recipe not found' });
//     }

//     await recipe.destroy();
//     res.status(204).end(); 
//   } catch (error) {
//     res.status(500).json(err);
//   }
// });

//delete route with authentication
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        r_id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// {
//   "title": "pp",
//   "ingredients": "pppppppppppppppppp ",
// 	"instructions": "pppppppppppppppppppp"
// }


module.exports = router;