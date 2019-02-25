// app.js
const express = require('express')
const app = express()


// const cookieParser = require('cookie-parser');
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');
global.appRoot = path.resolve(__dirname);

// Serve static assets from ./dist .
app.use(express.static('dist'));

// make req able to have the body parsed
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//add the database, routes, controllers to the app
const server = require('./config/server')(app)
const database = require('./config/database')
const model = require('./models/Model')(database)
// const controller = require(appRoot + '/controllers/Controller')(model) //this will require a copy of the model
const routes = require('./config/routes')()



//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());




//connect up routes this must be last as it includes the catch all
// for incoorect address
app.use('/', routes);




module.exports = app;


