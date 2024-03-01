const {User} = require('../models')
const Users= [
    {
        username: 'A',
        password: 12345,
      },
      {
        username: 'Ellie',
        password: 12345,
      },
      {
        username: 'Test',
        password: 12345,
      },
];
const usersProducts = () => User.bulkCreate(Users);
  module.exports = usersProducts;