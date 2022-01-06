# Kumparan technical test
  RESTfull API with Node.js using the Express.js Framework. Express.js is one of the popular web frameworks in the Node.js .  [Explore More Express.js](https://en.wikipedia.org/wiki/Express.js). Also use Redis for Caching. So, the data retrieval process is faster . This RESTful API was tested using mocha and chai with more than 30% of coverage, also with istanbul for the code coverage. for handle thousand data, redis is the way because It use caching method load more faster and efficient .

## Built With
[![Express.js](https://img.shields.io/badge/Express.js-4.17.1-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v12.16.2-green.svg?style=rounded-square)](https://nodejs.org/)


## Requirements
1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. database (Mysql)
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. XAMPP)

## Getting Started


In this project I use the Morgan package which serves as recording every request to the server.

Here to Use Morgan
```
var express = require('express')
var morgan  = require('morgan')
 
var app = express()
app.use(morgan())
```
and then there is a nodemon package to automatically restart the app node when our code changes so there is no need to restart manually

```
npm install -g nodemon

```
If use yarn


```
yarn add -g nodemon

```

Usage For Development

Clone this repository, then :
1. Open app's directory in CMD or Terminal
2. Type `npm install` or `yarn install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name article_service_db, and Import file [article_service_db.sql](article_service_db.sql) to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:8080/book)
8. You can see all the end point [here](#end-point)

if use yarn , type this to start server


```
yarn start



```

## Set up .env file
Open .env file on your code editor, and copy paste this code below :
```
SECRET_KEY=passwordkuaneh
REFRESH_TOKEN_SECRET=anehpasswordku

PORT = YOUR_CHOOSEN_PORT
DB_HOST= localhost
DB_USER= root
DB_PASSWORD=
DB_DATABASE= article_service_db
  
```

## Screenshots Coverage
  
<div align="center">
  <img width="500" src="./src/assets/Screen Shot 2022-01-07 at 00.47.31.png">
  <img width="500" src="./src/assets/Screen Shot 2022-01-07 at 00.48.02.png">

</div>


## if dont wanna to use redis, follow this step
<div align="center">
   <p>in app.js delete/ comment this code</p>
  <img width="500" src="./src/assets/Screen Shot 2022-01-07 at 01.04.11.png">
   <p>in routes/article.js delete midd.getArticles</p>
  <img width="500" src="./src/assets/Screen Shot 2022-01-07 at 01.04.21.png">
 <p>in controllers/article.js uncomment from above without redis and comment above redis</p>
  <img width="500" src="./src/assets/Screen Shot 2022-01-07 at 01.04.44.png">

</div>
## End Point
**GET**



GET Article response
* `/article`
```
{
    "status": 200,
    "message": "GET Data Successfully",
    "data": [
        {
            "id": 4,
            "author_id": "123123",
            "title": "test",
            "body": "try body",
            "created_at": "2022-01-06T16:22:30.000Z",
            "author_name": "j.k rowling"
        },
        {
            "id": 3,
            "author_id": "123123",
            "title": "twitter",
            "body": "A twitter is a network of 3D virtual worlds focused on social connection. ... In futurism ",
            "created_at": "2022-01-06T15:15:36.000Z",
            "author_name": "j.k rowling"
        },
        {
            "id": 2,
            "author_id": "123123",
            "title": "facebook",
            "body": "facebook is the most popular social media now,",
            "created_at": "2022-01-06T11:24:34.000Z",
            "author_name": "j.k rowling"
        },
        {
            "id": 1,
            "author_id": "123123",
            "title": "metaverse",
            "body": "A metaverse is a network of 3D virtual worlds focused on social connection. ... In futurism ",
            "created_at": "2022-01-06T11:22:12.000Z",
            "author_name": "j.k rowling"
        }
    ]
}
```
* `/article?query=meta`
```
 {
    "status": 200,
    "message": "GET Data Successfully",
    "data": [
        {
            "id": 1,
            "author_id": "123123",
            "title": "metaverse",
            "body": "A metaverse is a network of 3D virtual worlds focused on social connection. ... In futurism ",
            "created_at": "2022-01-06T11:22:12.000Z",
            "author_name": "j.k rowling"
        }
    ]
}
```



**POST**
* `/article`

```
 {
    "status": 200,
    "message": "POST Data Successfully",
    "data": {
        "id": "11",
        "author_id": "123123",
        "title": "twitter",
        "body": "A twitter is a network of 3D virtual worlds focused on social connection. ... In futurism ",
        "result": {
            "fieldCount": 0,
            "affectedRows": 1,
            "insertId": 11,
            "serverStatus": 2,
            "warningCount": 0,
            "message": "",
            "protocol41": true,
            "changedRows": 0
        }
    }
}
```


# Dependencies
- express
- mysql
- body-parser
- morgan
- nodemon
- cors
- redis
- dotenv

# Dev packages
- mocha
- chai
- chai-http
- nyc

## Authors

* Dwiky satria hutomo

http://github.com/dwikysahut

