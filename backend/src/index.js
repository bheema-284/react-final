const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const { register, login } = require('./Controllers/auth.controller');

const teachersController = require('./Controllers/teachers.controller');
const classController = require('./Controllers/classes.controller');

app.post('/login', login);

app.post('/register', register);

app.use('/teacher', teachersController);
app.use('/class', classController);

module.exports = app;
