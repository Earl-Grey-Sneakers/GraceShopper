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

// attributes: [
//     // specify an array where the first element is the SQL function and the second is the alias
//     [Sequelize.fn('DISTINCT', Sequelize.col('shoeName')) ,'shoeName'],
//     // specify any additional columns, e.g. country_code
//     // 'country_code'
// ]