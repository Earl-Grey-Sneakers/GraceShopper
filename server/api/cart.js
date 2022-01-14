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
      }
    });
    if (created) {
      cart = await Order.findOne({
        where: {
          userId: req.body.userId,
        }
      });
    }
    
    const style = await Style.findByPk(req.body.itemId);
    const exists = await cart.hasStyle(style);
    // cart.hasStyle( style )
    // .then( (exists) => {
    //    if ( !exists ) { 
    //         return cart.addStyle( style, { quantity : 1 } ) 
    //    } else {
    //         style.orderItems.quantity += 1;
    //         return style.orderItems.save();
    //    }
    // } )

    if (!exists){
      await cart.addStyle(style, {through: {quantity: 1}});
    }
    // else {
    //   style.orderItems.quantity+=1
    //   await style.orderItems.save()
    // }
    res.send(cart);
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
