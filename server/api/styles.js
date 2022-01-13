const router = require('express').Router()
const Sequelize = require('sequelize')
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
router.get('/:name', async (req, res, next) => {
    try {
        const style = await Style.findAll({
            where: {
                shoeName: {
                    [Sequelize.Op.eq]: req.params.name
                }
            }
        })
        res.status(200).json(style)
    } catch (error){
        next (error)
    }
})