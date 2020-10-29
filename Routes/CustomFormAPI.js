const express = require('express');
const router = express.Router();

// eventually we will be getting the form data from the database
router.get('/:companyName/:formName', function(req, res) {
    var params = req.params;
    var formData = formData(params.companyName, params.formName);

    res.json(formData);
});

function formData(companyName, formName) {
    if (companyName == "CalPoly") {
        if (formName == "FormName") {
            return {
                formDescription: "This is a description",
                fields: [
                {
                    type: "textbox",
                    label: "First Name"
                },
                {
                    type: "textbox",
                    label: "Last Name"
                },
                {
                    type: "email",
                    label: "Email",
                    placeholder: "type your email here please :) haha if u want"
                },
                {
                    type: "phoneNumber",
                    label: "Phone Number"
                },
                {
                    type: "textarea",
                    label: "Tell \"us\" about yourself"
                }]
            };
        }
    }
}


module.exports = router;