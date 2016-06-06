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
  
    // app.get('/api/countries/:id',function(req,res){
    //     var response = {};
    //     Country.findById(req.params.id, function(err,data){
    //     // This will run Mongo Query to fetch data based on ID.
    //         if(err) {
    //             response = {"error" : true,"message" : "Error fetching data"};
    //         } else {
    //             response = {"error" : false,"message" : data};
    //         }
    //         res.json(response);
    //     });
    // });
    
app.get('/api/countries/:id', function (req, res){
  return Country.findById(req.params.id, function (err, product) {
    if (!err) {
      return res.send(product);
    } else {
      return console.log(err);
    }
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