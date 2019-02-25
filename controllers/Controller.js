// Controller.js

const database = require(appRoot + '/config/database')
const model = require(appRoot + '/models/Model')(database)

const property = require('./property')(model)
const user = require('./user')(model)


module.exports = {
    property,
    user
} 
    
