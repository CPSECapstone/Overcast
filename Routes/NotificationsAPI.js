const express = require('express');
const router = express.Router();

router.get('', function(req, res) {
    var notifications = [
        {type: "form", title: "New Patient Form", dueDate: "Wednesday 12/9/20"},
        {type: "message", title: "Confirm Appointment for 12/9/20"},
        {type: "message", title: "Welcome!"}
    ];

    res.json({notifications});
});


module.exports = router;