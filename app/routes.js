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
  
    app.get('/api/countries/:id',function(req,res){
       // var response = {};
        Country.findById(req.params.id, function(err,data){
        // This will run Mongo Query to fetch data based on ID.
            if(err) {
              res.send(err);
           
            }
            res.send(data);
        });
    });
    
    app.post('/api/countries',function(req,res){    
    
        var country = new Country();
        var response = {};
        
        country.index = req.body.index; 
        country.name  = req.body.name;
        country.gdi_value =req.body.gdi_value;
        country.gdi_group = req.body.gdi_group;
        country.hdi_f = req.body.hdi_f;
        country.hdi_m =req.body.hdi_m;
        country.le_f =req.body.le_f;
        country.le_m =req.body.le_m;
        country.eys_f =req.body.eys_f;
        country.eys_m =req.body.eys_m;
        country.mys_f = req.body.mys_f;
        country.mys_m = req.body.mys_m;
        country.gni_f =req.body.gni_f;
        country.gni_m =req.body.gni_m;  
        country.hd_level=req.body.hd_level;
        
        country.save(function(err){
        // save() will run insert() command of MongoDB.
        // it will add new data in collection.
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
    });


app.delete('/api/countries/:id', function (req, res){
  return Country.findById(req.params.id, function (err, country) {
    return Country.remove({_id : req.params.id},function (err) {
      if (!err) {
        console.log("removed");
        return res.send('');
      } else {
        console.log(err);
      }
    });
  });
});


app.put('/api/countries',function(req,res){  

        var response = {};
        // first find out record exists or not
        // if it does then update the record
        Country.findById(req.params.id,function(err,country){
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
            // we got data from Mongo.
            // change it accordingly.
                if(req.body.index !== undefined) {
                    //
                    country.index = req.body.index;
                }
                if(req.body.name !== undefined) {
                    // 
                    country.name = req.body.name;
                }
                if(req.body.gdi_value!==undefined){
                  coutry.gdi_value=req.body.gdi_value;
                }
                if(req.gdi_group!==undefined){
                   country.gdi_group = req.body.gdi_group;
                }
                if(req.body.hdi_f!==undefined){
                  country.hdi_f = req.body.hdi_f;
                }
               
                if(req.body.hdi_m!==undefined){
                  country.hdi_m =req.body.hdi_m;
                }
                if(req.body.le_f!==undefined){
                  country.le_f =req.body.le_f;
                }
                if(req.body.le_m!==undefined){
                  country.le_m =req.body.le_m;
                }
                if(req.body.eys_f!==undefined){
                  country.eys_f =req.body.eys_f;
                }
                if(req.body.eys_m!==undefined){
                  country.eys_m =req.body.eys_m;
                }
                if(req.body.mys_f!==undefined){
                  country.mys_f = req.body.mys_f;
                }
                
                 if(req.body.mys_m!==undefined){
                  country.mys_m = req.body.mys_m;
                }
                if(req.body.gni_f!==undefined){
                  country.gni_f =req.body.gni_f;
                }
                 if(req.body.gni_m!==undefined){
                  country.gni_m =req.body.gni_m;
                }
                if(req.body.hd_level){
                  country.hd_level=req.body.hd_level;
                }
                // save the data
                country.save(function(err){
                    if(err) {
                        response = {"error" : true,"message" : "Error updating data"};
                    } else {
                        response = {"error" : false,"message" : "Data is updated for "+req.params.id};
                    }
                    res.json(response);
                })
            }
        });
    })

  

    
    
    // app.get('/api/countries/:name',function(req,res){
    //       // var response = {};
    //        Country.find({'name': new RegExp(req.params.name, "i")}, function(err, data) {
    //       //Do your action here..
 
    //     // This will run Mongo Query to fetch data based on ID.
    //         if(err) {
    //           res.send(err);
    //         //     response = {"error" : true,"message" : "Error fetching data"};
    //         // } else {
    //         //     response = {"error" : false,"message" : data};
    //         }
    //         res.send(data);
    //     });
    // });
    



  
  

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)


  //----------------------------------------------------------------------
  // frontend routes
  // route to handle all angular requests
  app.get('*', function (req, res) {
    res.sendFile('/public/index.html', { root: '.' });
  });
};




 