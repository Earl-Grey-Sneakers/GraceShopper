const router = require('express').Router();
const { Op } = require('sequelize')

const {
  models: { Order },
} = require('../db');
const {
  models: { Style, orderItems },
} = require('../db');

router.post('/', async (req, res, next) => {
  try {
    if (req.body.UUID=='empty') {
    let [cart, created] = await Order.findOrCreate({
      where: {
        isProcessed: false,
        userId: req.body.userId
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
  } else {
    let [cart, created] = await Order.findOrCreate({
      where: {
        isProcessed: false,
        UUID: req.body.UUID
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
  }
  } catch (error) {
    next(error);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const style = await Style.findByPk(req.body.itemId);
    const cart = await Order.findOne({where:{UUID:req.body.UUID}});
    const total = style.price*req.body.multi
    if(req.body.op==='inc') {
      await orderItems.increment('quantity', {where: {orderId:req.body.cartId, styleId:req.body.itemId}})
      await orderItems.increment({'totalPrice':style.price}, {where: {orderId:req.body.cartId, styleId:req.body.itemId}})
      await cart.increment({'orderTotal':style.price}, {where : {id:req.body.cartId}})
    } else if (req.body.op==='dec'){
      await orderItems.decrement('quantity', {where: {orderId:req.body.cartId, styleId:req.body.itemId, quantity: {[Op.gt]:0}}})
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

router.put('/:UUID', async (req, res, next) => {
  try {
    const order = await Order.findOne({where:{UUID:req.params.UUID}});
    await order.update({ isProcessed: true });
    await order.update({ purchaseDate: new Date() });
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.get('/:userId/:UUID', async (req, res, next) => {
  try {
    let cart;
    if(req.params.UUID!=='empty'){
      cart = await Order.findOne({
        where: {
          UUID: req.params.UUID,
          isProcessed: false,
        },
        include: {
          model: Style,
          attributes: ['id', 'brand', 'shoeName', 'color', 'size', 'imageUrl', 'price'],
        },
      });
    } else {
      cart = await Order.findOne({
        where: {
          userId: req.params.userId,
          isProcessed: false,
        },
        include: {
          model: Style,
          attributes: ['id', 'brand', 'shoeName', 'color', 'size', 'imageUrl', 'price'],
        },
      });
    }
    if (!cart) {
      res.status(200);
    }
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

router.delete('/:itemId/:UUID', async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        UUID: req.params.UUID,
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
