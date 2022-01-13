const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/styles', require('./styles'));
router.use('/carts', require('./cart'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
