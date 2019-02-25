/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
// routes.js

//get packages.
const express = require("express");
const fallthrough = require("./fallthrough");

const router = express.Router();
const controller = require("../controllers/Controller") //this is assigned in the constructor

//  deifne the routes for the home
router.get("/", (req, res) => {
  res.sendFile(appRoot + "/dist/home.html");
});
router.get("/home", (req, res) => {
  res.sendFile(appRoot + "/dist/home.html");
});

router.get("/about", (req, res) => {
  res.sendFile(appRoot + "/dist/about.html");
});

router.get("/products/:id(\\d+)/", (req, res) => {
  res.sendFile(appRoot + `/dist/product.html`);
});

router.get("/products", (req, res) => {
  res.sendFile(appRoot + "/dist/products.html");
});

router.get("/contact", (req, res) => {
  res.sendFile(appRoot + "/dist/contact.html");
});

router.post("/contact", (req, res,) => {
  res.send("Thank you question has been recieved");
});

router.get("/survey", (req, res) => {
  res.sendFile(appRoot + "/dist/survey.html");
});

router.post("/survey", (req, res, next) => {
  Promise.all([
    controller.user.create(req),
    controller.property.create(req),
    { page: Math.floor((Math.random() * 3) + 1) }
    
  ])
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next(err)
  })
  
});

//this is for testing purposes only to make sure the datbase is working correctly
router.get("/index", (req, res, next) => {
  Promise.all([
    controller.user.index(),
    controller.property.index()
  ])
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next(err)
  })
  
})

fallthrough(router);

module.exports = () => {
  return router;
};
