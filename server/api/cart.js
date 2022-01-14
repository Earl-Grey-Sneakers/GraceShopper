const router = require('express').Router();

const {
  models: { Order },
} = require('../db');
const {
  models: { Style, orderItems },
} = require('../db');

router.post('/', async (req, res, next) => {
  try {
    let [cart, created] = await Order.findOrCreate({
      where: {
        userId: req.body.userId,
        isProcessed: false,
      },
      include: {
        model: Style,
      }
    });

    const style = await Style.findByPk(req.body.itemId);
    const exists = await cart.hasStyle(style);

    if (!exists) {
      await cart.addStyle(style);
      await cart.save()
    }
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const style = await Style.findByPk(req.body.itemId);
    const cart = await Order.findByPk(req.body.cartId);
    const total = style.price*req.body.multi
    if(req.body.op==='inc') {
      await orderItems.increment('quantity', {where: {orderId:req.body.cartId, styleId:req.body.itemId}})
      await orderItems.increment({'totalPrice':style.price}, {where: {orderId:req.body.cartId, styleId:req.body.itemId}})
      await cart.increment({'orderTotal':style.price}, {where : {id:req.body.cartId}})
    } else if (req.body.op==='dec'){
      await orderItems.decrement('quantity', {where: {orderId:req.body.cartId, styleId:req.body.itemId}})
      await orderItems.decrement({'totalPrice':style.price}, {where: {orderId:req.body.cartId, styleId:req.body.itemId}})
      await cart.decrement({'orderTotal':style.price}, {where : {id:req.body.cartId}})
    } else if (req.body.op==='remove'){
      await cart.decrement({'orderTotal':total}, {where : {id:req.body.cartId}})
    }

    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

router.put('/:cartId', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.cartId);
    await order.update({ isProcessed: true });
    await order.update({ purchaseDate: new Date() });
    res.sendStatus(200);
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
    await cart.removeStyle(req.params.itemId);
    res.json(cart);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
