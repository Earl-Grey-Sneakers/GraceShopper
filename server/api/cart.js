const router = require('express').Router();

const {
  models: { Order },
} = require('../db');
const {
  models: { Style },
} = require('../db');

router.put('/', async (req, res, next) => {
  try {
    let [cart, created] = await Order.findOrCreate({
      where: {
        userId: req.body.userId,
        isProcessed: false,
      },
    });
    if (created) {
      const cart = await Order.findOne({
        where: {
          userId: req.body.userId,
        },
      });
    }

    await cart.addStyles(req.body.itemId);
    const style = await Style.findByPk(req.body.itemId);

    res.send(style);
  } catch (error) {
    next(error);
  }
});

router.put('/:userId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.params.userId,
        isProcessed: false,
      },
    });
    const processedOrder = await order.update(req.body);
    res.send(processedOrder);
  } catch (error) {
    next(error);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.params.userId,
        isProcessed: false,
      },
      include: {
        model: Style,
      },
    });
    if (!cart) {
      res.status(200);
    }
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

router.delete('/:userId/:itemId', async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.params.userId,
        isProcessed: false,
      },
      include: {
        model: Style,
        where: {
          id: req.params.itemId,
        },
      },
    });
    const removedItem = await cart.removeStyle(req.params.itemId);
    res.json(removedItem);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
