const express = require('express');
const router = express.Router();

// eventually, we will actually create a user account
router.post('/createAccount', (req, res) => {
    var body = req.body;
    console.log("user created account");
    // this is a placeholder response
    res.json({
        message: "You've successfully created an account"
    });
});

module.exports = router;
