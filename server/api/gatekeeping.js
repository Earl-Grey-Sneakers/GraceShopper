const { models: {User} } = require('../db')

//requireToken
const isUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        const user = await User.findByToken(token)
        req.user = user
        next()
    }
    catch(err) {
        next(err)
    }
}

//isAdmin]

module.exports = {
   isUser
}