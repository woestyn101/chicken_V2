const seedCategories = require('./Category-Seeds');
const userSeeds = require('./User-seeds');
const recipeSeeds = require('./Recipe-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');
  
    await recipeSeeds();
    console.log('\n----- RECEPIES SEEDED -----\n');
  
    await userSeeds();
    console.log('\n----- USERS SEEDED -----\n');
  
    process.exit(0);
  };

  seedAll();