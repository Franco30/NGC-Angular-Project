const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var applicantController = require('./controllers/applicantController.js');
var todoController = require('./controllers/todoController.js');

var app = express();
var todo = express();

todo.use(bodyParser.json());
todo.use(cors({ origin: 'http://localhost:4200' }));

todo.listen(4000, () => console.log('Server started at port : 4000'));

todo.use('/todo', todoController);

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/applicant', applicantController);