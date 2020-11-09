var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var tableName = "Accounts";
var docClient = new AWS.DynamoDB.DocumentClient();

export function putUser(username, password){
    var params = {
        TableName: tableName,
        Item : {
            "Username" : username,
            "Password" : password
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });
}

export function getUser(username){
    var params = {
        TableName: tableName,
        Key : {
            "Username" : username
        }
    };

    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
}