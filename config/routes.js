// routes.js

//get packages.
const express = require('express')
const fallthrough = require('./fallthrough')

const router = express.Router()
const controller = null //this instantiated by the constructor function

	//  deifne the routes for the home
router.get('/', (req, res, next) => {

  res.end('TODO this will be the home page eventually.');

})

router.get('/about', (req, res, next) => {
	res.end('TODO the about page')
})

router.get('/products', (req, res, next) => {
	res.end('TODO the products page')
})

router.get('/products/:id', (req, res, next) => {
	res.end(`TODO special products page ${ id }`)
})

router.get('/contact', (req, res, next) => {
	res.end('TODO contacts page')
})

router.get('/survey', (req, res, next) => {
	res.end('TODO survey get')
})

router.post('survey', (req, res, next) => {
	res.end('TODO parse the survey')
})

fallthrough(router)


module.exports = (controller) => {
	this.controller = controller
	return router
}