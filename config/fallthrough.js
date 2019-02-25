/* eslint-disable no-unused-vars */
// fallthrough.js

module.exports = router => {
  //catch the errors and missed typed pages.
  // These routes which catch anything that falls through
  // Handle 404
  router.use((_req, res, _next) => {
    res.send("Custom 404 page");
  });

  // Error Catching middleware.
  router.use((err, _req, res, _next) => {
    res.send(err);
  });
};
