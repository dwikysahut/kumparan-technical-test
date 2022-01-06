const express = require('express');
const Route = express.Router();

const articleRoute = require('./routes/article');
Route.use('/article', articleRoute)


module.exports = Route