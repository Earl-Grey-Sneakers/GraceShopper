const router = require('express').Router()
const { models: { Style }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
    try {
        const styles = await Style.findAll({
            attributes: ['shoeName','price','imageUrl'],
                group: ['shoeName','price','imageUrl']
          })
        res.send(styles)
    } catch (error) {
        next(error)
    }
})