const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/NGC', (err) => {
    if (!err)
        console.log('NGC connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;