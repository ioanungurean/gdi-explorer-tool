// app/models/country.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our country model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Country', {
    index: Number,
    name: String,
    gdi_value: Number,
    gdi_group: Number,
    hdi_f: Number,
    hdi_m: Number,
    le_f: Number,
    le_m: Number,
    eys_f: Number,
    eys_m: Number,
    mys_f: Number,
    mys_m: Number,
    gni_f: Number,
    gni_m: Number,
    hd_level: String
});