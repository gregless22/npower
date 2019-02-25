// fallthrough.js

module.exports = router => {
  //catch the errors and missed typed pages.
  // These routes which catch anything that falls through
  // Handle 404
  router.use((req, res, next) => {
    // let err = new ErrorHandler.PageNotFound('Page not Found');
    // next(err);
    res.send("TODO custom 404 page");
  });

  // Error Catching middleware.
  router.use((err, req, res, next) => {
    console.log(err);
    res.send(err);
  });
};
