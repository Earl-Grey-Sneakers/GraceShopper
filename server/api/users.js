const router = require('express').Router();
const { models: { User } } = require('../db');
const { isUser } = require('./gatekeeping')
module.exports = router;

// router.get('/', async (req, res, next) => {
//   try {
//     const user = await User.findByToken(req.headers.authorization);
//     console.log(user, 'user');
//     res.json(user);
//   } catch (err) {
//     next(err);
//   }
// });

router.get('/', isUser,  async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'email'],
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
});
