// https://stackoverflow.com/questions/5010288/how-to-make-a-function-wait-until-a-callback-has-been-called-using-node-js

var randomizer = require("randomstring");

var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var tableName = "TokenVault";
var docClient = new AWS.DynamoDB.DocumentClient();

// given a string and some data, return a tokenized value of the Data
// for e.g. tokenize("1 Grand Ave.", "Address");
function tokenize(astring, typeofdata){
    var token = randomizer.generate(32);
    var params = {
        "TableName" : tableName,
        "Item" : {
            "Token" : token,
            "Data" : astring,
            "Metadata" : typeofdata,
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            return null;
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
            return token;
        }
    });

}

// given a token, return the true data mapped to the token
function retrieveData(token){
    var params = {
        "TableName": tableName,
        "Key" : {
            "Token" : token
        }
    };

    var ret_val = null;

    return docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            ret_val = JSON.stringify(data, null, 2);
            return ret_val;
        }
    });
    // console.log(ret_val);
    // return ret_val;
}
