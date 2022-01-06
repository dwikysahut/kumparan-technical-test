const redis = require("../config/redisConn").clinet
const helper = require('../helpers')

class Caching {
    getArticles(request, res, next) {
        const query_author = request.query.author ? request.query.author : "";
        const query_keyword = request.query.query ? request.query.query : "";
        const query = {
            query_author,
            query_keyword
        }
        const key = `query=${query.query_keyword.toString()}+author=${query.query_author.toString()}`;

        redis.get(key, (error, result) => {
            if (error) {
                console.log(error)
                throw error

            }
            if (result !== null) {
                console.log("get from redis");
                const data = JSON.parse(result);
                return helper.response(res, 200, data.result, "GET Data Successfully")

            } else {
                //  console.log('next')
                next()
            }
        })
    }
}
module.exports = new Caching()