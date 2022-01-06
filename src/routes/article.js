const express = require('express');
const Route = express.Router();
const articleController = require('../controllers/articleController');

Route
.get('/',articleController.getArticles)
.post('/',articleController.postArticle)


module.exports = Route