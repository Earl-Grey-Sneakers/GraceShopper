const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization)
    console.log(user, 'user')
    res.json(user)
  } catch (err) {
    next(err)
  }
})
