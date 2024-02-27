const router = require('express').Router();
const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipe-routes');

// When we have localhost:8001/api/users
router.use('/users', userRoutes);

// When we have localhost:8001/api/recipes
router.use('/recipes', recipeRoutes);

module.exports = router;