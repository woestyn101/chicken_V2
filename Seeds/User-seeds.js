const {User} = require('../models')
const Users= [
    {
        username: 'A',
        password: 12345678,
      },
      {
        username: 'Ellie',
        password: 12345678,
      },
      {
        username: 'Test',
        password: 12345678,
      },
];
const usersProducts = () => User.bulkCreate(Users);
  module.exports = usersProducts;