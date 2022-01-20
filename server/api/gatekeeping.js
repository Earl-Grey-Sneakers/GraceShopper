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

const isAdmin = async (req, res, next) => {
    if(!req.user.isAdmin){
        return res.status(403).send('Nice try, hackermans!')
    } else {
        next()
    }
}

module.exports = {
   isUser,
   isAdmin
}