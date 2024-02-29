const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Recepies',
  },
  {
    category_name: 'Users',
  },
 
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
