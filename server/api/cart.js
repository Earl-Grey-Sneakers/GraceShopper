const router = require('express').Router();
const { Op } = require('sequelize')

const {
  models: { Order },
} = require('../db');
const {
  models: { Style, orderItems },
} = require('../db');

//Find or create cart
router.post('/', async (req, res, next) => {
  try {
    if (req.body.UUID==='empty' && req.body.userId===0) {
    let cart = await Order.create();

    const style = await Style.findByPk(req.body.itemId);
    const exists = await cart.hasStyle(style);

    if (!exists) {
      await cart.addStyle(style);
      await cart.save()
    }
    const resp = {id, UUID} = cart
    res.send(resp);
  } else if (req.body.UUID==='empty') {
    let cart = await Order.create({userId:req.body.userId});

    const style = await Style.findByPk(req.body.itemId);
    const exists = await cart.hasStyle(style);

    if (!exists) {
      await cart.addStyle(style);
      await cart.save()
    }
    const resp = {id, UUID} = cart
    res.send(resp);
  } else {
    let cart = await Order.findOne({
      where: {
        isProcessed: false,
        UUID: req.body.UUID
      },
    });

    const style = await Style.findByPk(req.body.itemId);
    const exists = await cart.hasStyle(style);

    if (!exists) {
      await cart.addStyle(style);
      await cart.save()
    }
    const resp = {id, UUID} = cart
    res.send(resp);
  }
  } catch (error) {
    next(error);
  }
});

//Update quantities of items
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

//checkout cart
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

//fetch the entire cart
router.get('/:userId/:UUID', async (req, res, next) => {
  try {
    let cart = false;
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
    } else if (req.params.userId!==0){
      cart = await Order.findOne({
        where: {
          userId: req.params.userId,
          isProcessed: false,
        },
        include: {
          model: Style,
          attributes: ['id', 'brand', 'shoeName', 'color', 'size', 'imageUrl', 'price'],
        },
      })
    }
    if (cart===false) {
      res.status(200);
    }
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

//delete item from cart
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

//attach userId to guest cart
router.put('/attach/:userId', async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where:{
        UUID: req.body.UUID
      }
    })
    await cart.update({userId:req.params.userId})
    res.status(200)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
