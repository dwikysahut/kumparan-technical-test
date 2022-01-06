const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config({path:__dirname+'/.env'})
// const morgan = 
const routeNavigator = require('./src/index');
const server = app.listen(5000, "127.0.0.1", function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("connected at " + host + ":" + port);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan("dev"))
app.use(cors({
    origin: "*",
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: 'true',
    optionSuccessStatus: 200

}));
app.use('/', routeNavigator);



module.exports = app