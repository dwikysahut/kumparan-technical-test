const express = require('express');
const Route = express.Router();
const articleController = require('../controllers/articleController');
const midd = require('../middleware/Caching')
Route
.get('/',midd.getArticles,articleController.getArticles)
.post('/',articleController.postArticle)


module.exports = Route