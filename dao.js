var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-1",
  endpoint: "http://localhost:8000"
});

var dynamo = function(req, res) {
    this.tableName = "Accounts";
    this.docClient = new AWS.DynamoDB.DocumentClient();
}

//var tableName = "Accounts";
//var docClient = new AWS.DynamoDB.DocumentClient();

dynamo.prototype.putUser = function(username, password) {
    var params = {
        TableName: this.tableName,
        Item : {
            "Username" : username,
            "Password" : password
        }
    };

    this.docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });
}

dynamo.prototype.getUser = function(username) {
    var params = {
        TableName: this.tableName,
        Key : {
            "Username" : username
        }
    };

    this.docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
}

module.exports = dynamo;
