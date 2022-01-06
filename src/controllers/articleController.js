const helper = require('../helpers');
const articleModel = require('../models/articleModel');
const redis = require("../config/redisConn").clinet

module.exports = {
    getArticles: async function (request, response) {
        try {
            const query_author = request.query.author ? request.query.author : "";
            const query_keyword = request.query.query ? request.query.query : "";
            const query = {
                query_author,
                query_keyword
            }
            // console.log(query_author)
            // without redis
            // const result = await articleModel.getArticles(query);
            // return helper.response(response, 200, result,"GET Data Successfully");

            //redis
            try {
                const key = `query=${query.query_keyword.toString()}+author=${query.query_author.toString()}`;
                const result = await articleModel.getArticles(query);
                const redisValue = {
                    result,
                }
                const data = JSON.stringify(redisValue)
                redis.setex(key, 3600, data)
                return helper.response(response, 200, result,"GET Data Successfully");

            } catch (error) {
                console.log(error);
            }

        } catch (error) {
            return helper.response(response, 500, error);

        }
    },
    postArticle: async function (request, response) {
        try {
            const setData = request.body;
            const result = await articleModel.postArticle(setData);
            return helper.response(response, 200, result,"POST Data Successfully");
        } catch (error) {
            return helper.response(response, 500, error);

        }
    }
}