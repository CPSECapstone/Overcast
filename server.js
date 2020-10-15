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
app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(port, function () {
    console.log(`Server up and listening on ${port}!`);
});


/* HTTP request functions */
router.get('/', (req, res) => {
    // Serves web page index.html 
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

router.post('/', async function(req, res) {
    // Add backend POST function here to connect to frontend

});