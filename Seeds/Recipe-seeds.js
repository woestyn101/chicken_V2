const {Recipe} = require('../models')
const recipeData = [
    {
      title: 'Buffalo Chicken Wrap',
      ingredients: 'canola oil for frying, 1 cup all-purpose flour, 1/4 teaspoon black pepper, 1 teaspoon salt, 1/2 cup buttermilk, 8 chicken tenders, 1/4 cup Franks Red Hot sauce, 1/4 cup butter, four 12 inch wraps (I used Jalapeno cheddar, though thats up to you), 1/2 head romaine lettuce, roughly chopped, 1 cup blue cheese, crumbled, 1 tomato, stemmed, seeded, and chopped',
      instructions: 'https://tastesbetterfromscratch.com/buffalo-chicken-wrap/',
      category_id: 1 ,
    },
  ];
  
  const recpieProducts = () => Recipe.bulkCreate(recipeData);
  module.exports = recpieProducts;
  