const express = require('express');
const router = express.Router();
const db = require('../dao.js');

// eventually, we will actually create a user account
router.post('/', (req, res) => {
    const dynamo = new db(req, res);
    var body = req.body;

    dynamo.putUser(body.email, body.password);
    res.json({
        message: "You've successfully created an account"
    });
});

module.exports = router;
