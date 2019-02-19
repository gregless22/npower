/* eslint-disable no-undef */
// routes.js

//get packages.
const express = require("express");
const fallthrough = require("./fallthrough");

const router = express.Router();
const controller = null; //this instantiated by the constructor function

//  deifne the routes for the home
router.get("/", (req, res, next) => {
  res.sendFile(appRoot + "/dist/home.html");
});
router.get("/home", (req, res, next) => {
  res.sendFile(appRoot + "/dist/home.html");
});

router.get("/about", (req, res, next) => {
  res.sendFile(appRoot + "/dist/about.html");
});

router.get("/products", (req, res, next) => {
  res.sendFile(appRoot + "/dist/products.html");
});

router.get("/products/:id(\\d+)/", (req, res, next) => {
  // console.log(appRoot + `/dist/product.html ${req.params.id}`)
  res.sendFile(appRoot + `/dist/product.html`);
  // todo res.end(`TODO special products page ${ JSON.stringify(req.params.id) }`)
  // res.sendFile(appRoot + '/dist/home.html')
});

// testing
router.get("/product", (req, res, next) => {
  // console.log(appRoot + `/dist/product.html ${req.params.id}`)
  // res.sendFile(appRoot + `/dist/product.html`)
  // res.end(`TODO special products page ${ JSON.stringify(req.params.id) }`)
  // res.sendFile(appRoot + '/dist/product.html')
  // res.send(req)
});

router.get("/contact", (req, res, next) => {
  res.sendFile(appRoot + "/dist/contact.html");
});

router.post("/contact", (req, res, next) => {
  console.log("made it to contact");
  res.send("Thank you question has been recieved");
});

router.get("/survey", (req, res, next) => {
  res.sendFile(appRoot + "/dist/survey.html");
});

router.post("survey", (req, res, next) => {
  res.end("TODO parse the survey");
});

fallthrough(router);

module.exports = controller => {
  this.controller = controller;
  return router;
};
