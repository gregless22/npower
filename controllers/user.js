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
        // const email = req.body.email
        // const suburb = req.body.postcode
        console.log(name + " " + email + " " + suburb)
        
        this.model.create({ name, email, suburb })
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            res.send(error)
        })
    }

    index (req, res, next) {
        console.log("executing")
        this.model.findAll()
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.log(error)
            next()
        }) 
    }
    
}

module.exports = (model) => new UserController(model)

// module.exports = async (model) => {
//     const contr = await new UserController(model)
//     return contr
// }




