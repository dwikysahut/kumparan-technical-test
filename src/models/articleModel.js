const connection = require('../config/conn');
module.exports = {
    getArticles: function (query) {
        return new Promise(function(resolve,reject){
            connection.query(`SELECT articles.*,authors.name as author_name from authors INNER JOIN articles ON articles.author_id=authors.id WHERE (articles.title LIKE "%${query.query_keyword}%" OR articles.body LIKE "%${query.query_keyword}%") AND authors.name LIKE "%${query.query_author}%" ORDER BY created_at DESC`,function(error,result){
                if(!error){
                    resolve(result)
                }
                else{
                    reject(new Error(error))
                }
            })
        })
        
    },
    postArticle:function(setData){
        return new Promise(function(resolve,reject){
            connection.query('INSERT INTO articles SET ?',setData,function(error,result){
                if(!error){
                    const newData={
                        id:result.insertId,
                        ...setData,
                        result
                    }
                    resolve(newData)
                }
                else{
                    reject(new Error(error))
                }
            })
        })
    }
}