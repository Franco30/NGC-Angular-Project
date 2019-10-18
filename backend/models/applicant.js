const mongoose = require('mongoose');

var Applicant = mongoose.model('Applicant', {
    name: { type: String },
    corporation: {type: String},
    address: {type: String},
    corporationaddress: {type: String},
    authrepresentative: {type: String},
    addressauthrepresentative: {type: String},
    projecttype: {type: String},
    projectnature: {type: String},
    projectlocation: {type: String},
    projectarea: {type: String},
    rightoverland: {type: String},
    projecttenure: {type: String},
    projectsite: {type: String},
    status: {type: String},
    projectcost: {type: String},
});

module.exports = { Applicant };