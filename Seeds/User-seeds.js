const {User} = require('../models')
const Users= [
    {
        Username: 'A',
        password: 12345,
      },
];
const usersProducts = () => User.bulkCreate(Users);
  module.exports = usersProducts;