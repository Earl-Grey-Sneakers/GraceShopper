const router = require('express').Router()
const { models: { User }} = require('../db')
const { Op } = require('sequelize')
module.exports = router

router.get('/', (req, res, next) => {
    try {
      const admin = User.findAll({
        where: {
          isAdmin: {
            [Op.eq]: true
          }
        }
      })
      res.json(admin)
    } catch (error) {
      next(error)
    }
  }) 