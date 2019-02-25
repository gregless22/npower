/* eslint-disable no-undef */
//get the model
// const User = require('../models/user')

class UserController {

    // userModel;

    constructor (model) {
        this.model = model.user()
    }

    create (req) {
        const { name, email, postcode: suburb } = req.body
        return this.model.create({ name, email, suburb })
    }

    index () {
        return this.model.findAll()
    }
    
}

module.exports = (model) => new UserController(model)






