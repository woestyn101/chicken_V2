const { Model, DataTypes } = require('sequelize');
const router = require('express').Router();
const path = require('path');
const { User, Recipe } = require('../../models');

router.get('/', (req, res) => {
  res.json(user);
});

router

module.exports = router;