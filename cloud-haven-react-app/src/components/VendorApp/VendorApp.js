import React, {useState, useEffect} from 'react';
import * as api from '../../api.js';
import "./VendorApp.css";

const VendorApp = () => {
    useEffect(() => {
        getVendorAppData()
    }, []);

    const [vendorApp, setVendorApp] = useState({
        VendorId: "",
        VendorAuth: "",
        Components: []
    });

    const getVendorAppData = () => {
        
    }


    return (

    )
}

export default VendorApp;