const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    var vendorAppData = {
        VendorId: "UUID",
        VendorAuth: "Password",
        Components: [
            {
                Component: "form",
                Fields: [
                    {
                        Child: "textbox",
                        label: "Full name",
                        Validate: true,  // optional
                        Sensitive: true // optional
                    },
                    {
                        Child: "phoneNumber",
                        label: "Phone number"
                    },
                    {
                        Child: "date",
                        label: "Birthday"
                    },
                    {
                        Child: "textbox",
                        label: "Driver’s license number"
                    },
                ]
            },
            {
                Component: "card",
                Header: "header text",
                body: "inner text",
                Footer: "footer text"
            },
            {
                Component: "button",
                Text: "inner text",
                "Submit location": "url"
                //Callback: STRETCH GOAL
            },
            {
                Component: "link",
                Src: "url",
                Alt: "alt text"
            },
            {
                Component: "image",
                Src: "url",
                Alt: "alt text"
            },
            {
                Component: "text",
                Content: "I am text",
                Label: "text label"  // optional
            },
            {
                Component: "table",
                display: 5,
                headers: [    // optional
                    "Header 1"
                ],
                rows: [    
                    {
                        Component: "text",
                        Content: "I am a table cell",
                    },
                    {
                        Component: "image",
                        Src: "url",
                        Alt: "table image"
                    }
                ]
            }
        ]
    };
    
    res.json(vendorAppData);
});



module.exports = router;