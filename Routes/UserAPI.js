const express = require('express');
const router = express.Router();
const db = require('../dao.js');
const bcrypt = require('bcrypt');

router.post('/', (req, res) => {
    const dynamo = new db(req, res);
    var body = req.body;

    // TODO: potentially sanitize data --> need to research
    bcrypt.hash(body.password, 10, function(err, hashedPassword) {
        if (!err) {
            console.log("password hashed!");
            dynamo.putUser(body.email, hashedPassword);
            res.status(200).json({message: "You've successfully created an account!"});
        }
        else {
            console.log("Could not hash password");
            res.status(400).json({error: "Could not create account"});
        }
    });
});

module.exports = router;
