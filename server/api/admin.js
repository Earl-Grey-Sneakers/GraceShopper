const router = require('express').Router();
const Sequelize = require('sequelize');
const {
  models: { Style },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
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
