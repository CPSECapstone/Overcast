/*
Main file to run backend server
Run 'node server.js'
*/

const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
const path = require('path');
const bodyParser = require('body-parser');


/* DynamoDB set up */
var AWS = require("aws-sdk");

AWS.config.update({
    region: "eu-west-1",
    endpoint: "http://localhost:3000"
});

var dynamoClient = new AWS.DynamoDB.DocumentClient();


/* App set up */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
    res.header("Access-Control-Expose-Headers", "Content-Type, Location");
    next();
});

app.use(bodyParser.json()); 

app.use("/", router);

app.listen(port, function () {
    console.log(`Server up and listening on ${port}!`);
});


/* HTTP request functions */

router.get('/testConnection', (req, res) => {
    console.log("recieved test get request");
    res.json({message: "get test"});
});

router.post('/testConnection', (req, res) => {
    console.log("recieved test post request");
    console.log(`message recieved: ${req.body.message}`);
    res.json({message: "post test"});
});

router.put('/testConnection', (req, res) => {
    console.log("recieved test put request");
    console.log(`message recieved: ${req.body.message}`);
    res.json({message: "put test"});
});

router.delete('/testConnection', (req, res) => {
    console.log("recieved test delete request");
    res.json({message: "del test"});
});

router.post('/', async function(req, res) {
    // Add backend POST function here to connect to frontend

});
