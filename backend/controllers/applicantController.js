const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Applicant } = require('../models/applicant');

// => localhost:3000/applicant/
router.get('/', (req, res) => {
    Applicant.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Applicant :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Applicant.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Applicant :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var app = new Applicant({
        name: req.body.name,
        corporation: req.body.corporation,
        address: req.body.address,
        corporationaddress: req.body.corporationaddress,
        authrepresentative: req.body.authrepresentative,
        addressauthrepresentative: req.body.addressauthrepresentative,
        projecttype: req.body.projecttype,
        projectnature: req.body.projectnature,
        projectlocation: req.body.projectlocation,
        projectarea: req.body.projectarea,
        rightoverland: req.body.rightoverland,
        projecttenure: req.body.projecttenure,
        projectsite: req.body.projectsite,
        status: req.body.status,
        projectcost: req.body.projectcost,
    });
    app.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Applicant Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var app = {
        name: req.body.name,
        corporation: req.body.corporation,
        address: req.body.address,
        corporationaddress: req.body.corporationaddress,
        authrepresentative: req.body.authrepresentative,
        addressauthrepresentative: req.body.addressauthrepresentative,
        projecttype: req.body.projecttype,
        projectnature: req.body.projectnature,
        projectlocation: req.body.projectlocation,
        projectarea: req.body.projectarea,
        rightoverland: req.body.rightoverland,
        projecttenure: req.body.projecttenure,
        projectsite: req.body.projectsite,
        status: req.body.status,
        projectcost: req.body.projectcost,
    };
    Applicant.findByIdAndUpdate(req.params.id, { $set: app }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Applicant Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Applicant.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in applicant Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;