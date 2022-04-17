const express = require('express');
const mongoose = require('mongoose');
const connect = require('./src/Configs/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const TeachersController = require('./src/Controllers/teachers.controller');
app.use('/teachers', TeachersController);
module.exports = app;
