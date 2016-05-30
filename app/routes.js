// app/routes.js

// grab the country model we just created
var Country = require('./models/country');

module.exports = function (app) {
  //----------------------------------------------------------------------
  // server routes
  // handle things like api calls
  // authentication routes

  // sample api route
  app.get('/api/countries', function (req, res) {
    // use mongoose to get all countries in the database
    Country.find(function (err, countries) {
      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err)
        res.send(err);

      // return all countries in JSON format
      res.json(countries);
    });
  });

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)


  //----------------------------------------------------------------------
  // frontend routes
  // route to handle all angular requests
  app.get('*', function (req, res) {
    res.sendFile('/public/index.html', { root: '.' });
  });
};