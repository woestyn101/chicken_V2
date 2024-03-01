const {Recipe} = require('../models')
const recipeData = [
    {
      title: 'Buffalo Chicken Wrap',
      ingredients: 'canola oil for frying, 1 cup all-purpose flour, 1/4 teaspoon black pepper, 1 teaspoon salt, 1/2 cup buttermilk, 8 chicken tenders, 1/4 cup Franks Red Hot sauce, 1/4 cup butter, four 12 inch wraps (I used Jalapeno cheddar, though thats up to you), 1/2 head romaine lettuce, roughly chopped, 1 cup blue cheese, crumbled, 1 tomato, stemmed, seeded, and chopped',
      instructions: 'https://tastesbetterfromscratch.com/buffalo-chicken-wrap/',
      category_id: 1 ,
    },
    {
      title:'Marry Me Chicken',
      ingredients:'3 large chicken breasts, 1/2 teaspoon salt, 1/4 teaspoon ground black pepper, 6 tablespoons all-purpose flour, 2 tablespoons olive oil, 2 tablespoons unsalted butter, 3 cloves garlic (minced), 1 cup chicken stock, 1 cup heavy cream, 1/2 cup parmesan cheese, 1 teaspoon chili flakes, 1/4  teaspoon oregano, 1/4 teaspoon thyme, 1/3 cup sundried tomatoes (chopped), 1 tablespoon fresh basil ',
      instructions:'https://littlesunnykitchen.com/marry-me-chicken/',
      category_id: 2 ,
    },
    {
      title:'Chicken Alfredo',
      ingredients:'2 tablespoon extra-virgin olive oil, 2 boneless skinless chicken breasts, Kosher salt to taste, Freshly ground black pepper to taste , 2 cups low-sodium chicken broth, 2 cups whole milk, 2 cloves garlic (finely chopped), 8 oz fettuccine, 1 cup finely grated Parmesan , 1/2 cup heavy cream, Chopped fresh parsley for serving ',
      instructions:'https://www.delish.com/cooking/recipe-ideas/a53695/one-pot-chicken-alfredo-recipe/',
      category_id: 3 ,
    },
    {
      title:'Tuscan Chicken Skillet',
      ingredients:'Kosher salt and freshly ground black pepper, 12 ounces fettuccine , 4 slices bacon (chopped), 1 pound chicken tenders (cut into 1-inch pieces), 2 cloves garlic (minced) 4 plum tomatoes (chopped), 1 cup heavy cream, 5 ounces baby spinach, 3/4 cup grated Parmesan, 3 tablespoons chopped fresh basil',
      instructions:'https://www.foodnetwork.com/recipes/food-network-kitchen/tuscan-chicken-skillet-5421728',
      category_id: 4 ,
    },
  ];
  
  const recpieProducts = () => Recipe.bulkCreate(recipeData);
  module.exports = recpieProducts;
  