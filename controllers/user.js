/* eslint-disable no-undef */
//get the model
// const User = require('../models/user')

class UserController {

    // userModel;

    constructor (model) {
        this.model = model.user()
    }

    create (req, res, next) {
        const { name, email, postcode: suburb } = req.body
        return this.model.create({ name, email, suburb })
    }

    index (req, res, next) {
        return this.model.findAll()
    }
    
}

module.exports = (model) => new UserController(model)






