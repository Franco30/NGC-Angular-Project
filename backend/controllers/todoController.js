const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Todo } = require('../models/todo');

// => localhost:3000/todo/
router.get('/', (req, res) => {
    Todo.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Todo :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Todo.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Todo :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var todo = new Todo({
        task: req.body.task
    });
    todo.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Todo Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var todo = {
        task: req.body.task
    };
    Todo.findByIdAndUpdate(req.params.id, { $set: todo }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Todo Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Todo.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Todo Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;