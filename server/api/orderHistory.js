const router = require('express').Router();
const { models: { User } } = require('../db');
const { models: { Order } } = require('../db/')

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const order = await Order.findByPk()
  } catch (err) {
    next(err);
  }
});