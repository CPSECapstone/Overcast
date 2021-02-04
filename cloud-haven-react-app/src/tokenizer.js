var randomizer = require("randomstring");

var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var tableName = "TokenVault";
var docClient = new AWS.DynamoDB.DocumentClient();


/*
given a string and some data, return a tokenized value of the Data
example usage:
tokenize("randomstring", "data")
    .then(function(res){
        token = res;
        console.log(token);
    })
    .catch((err) => console.log(err));
*/
async function tokenize(astring, typeofdata){
    var token = randomizer.generate(32);
    var params = {
        "TableName" : tableName,
        "Item" : {
            "Token" : token,
            "Data" : astring,
            "Metadata" : typeofdata,
        }
    };

    await docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });

    return token;
}

/*
given a token, return the json data mapped to the token
retrieveData(token, function(data){
    console.log(data);
});
*/
async function retrieveData(token, callback){
    var params = {
        "TableName": tableName,
        "Key" : {
            "Token" : token
        }
    };

    await docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            return callback(JSON.stringify(data, null, 2));
        }
    });
}
