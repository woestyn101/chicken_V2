
const router = require("express").Router();
// const { Project, User } = require('../models');
//const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;

