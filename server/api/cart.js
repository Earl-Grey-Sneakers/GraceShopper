const router = require('express').Router();
const { route } = require('.');
const { Order } = require('../db/models/Order');

router.put('/', async (req, res, next) => {
  try {
    const cart = await Order.findOrCreate({
      where: {
        userId: req.payload.id,
        isProcessed: false,
      },
      defaults: {
        isProcessed: false,
      },
    });
    res.json(cart);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
