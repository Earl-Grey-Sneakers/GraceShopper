const router = require('express').Router();
const Sequelize = require('sequelize');
const { models: { Style } } = require('../db');
const { isUser, isAdmin } = require('./gatekeeping')
module.exports = router;

router.get('/', isUser, isAdmin, async (req, res, next) => {
  try {
    const styles = await Style.findAll();
    res.send(styles);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const style = await Style.findByPk(req.params.id);
    res.status(200).json(style);
  } catch (error) {
    next(error);
  }
});

router.put('/:itemId', async (req, res, next) => {
  try {
    const style = await Style.findByPk(req.params.itemId);
    await style.update(req.body);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.post('/', isUser, isAdmin, async (req, res, next) => {
  try {
    const style = await Style.create(req.body);
    res.send(style);
  } catch (error) {
    next(error);
  }
});
