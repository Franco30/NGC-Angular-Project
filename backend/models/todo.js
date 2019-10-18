const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    task: { type: String }
});

module.exports = { Todo };