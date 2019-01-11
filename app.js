// app.js
const express = require('express')
const app = express()


// const cookieParser = require('cookie-parser');
const cors = require('cors')
const path = require('path');
global.appRoot = path.resolve(__dirname);

//add the database, routes, controllers to the app
const server = require('./config/server')(app)
const database = require('./config/database')
const model = require('./models/Model')(database)
const controllers = require(appRoot + '/controllers/Controller') //this will require a copy of the model
const routes = require('./config/routes')(controllers)



//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());



//connect up routes this must be last as it includes the catch all
// for incoorect address
app.use('/', routes);




module.exports = app;


