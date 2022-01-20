const router = require('express').Router();
const { models: { User } } = require('../db');
const { isUser, isAdmin } = require('./gatekeeping')
module.exports = router;

router.get('/', isUser, isAdmin,  async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'email'],
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
});