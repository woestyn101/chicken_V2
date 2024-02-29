const userSeeds = require('./User-seeds');
const recipeSeeds = require('./Recipe-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
    await recipeSeeds();
    console.log('\n----- RECEPIES SEEDED -----\n');
  
    await userSeeds();
    console.log('\n----- USERS SEEDED -----\n');
  
    process.exit(0);
  };

  seedAll();