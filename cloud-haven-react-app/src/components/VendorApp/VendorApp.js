import React, {useState, useEffect} from 'react';
import { VendorAppPage } from '../components';
import * as api from '../../api.js';
import "./VendorApp.css";

const VendorApp = () => {
    useEffect(() => {
        getVendorAppData();
    }, []);

    const [vendorId, setVendorId] = useState("");

    const [vendorAuth, setVendorAuth] = useState("");

    const [components, setComponents] = useState([]);

    const getVendorAppData = () => {
        api.getVendorAppData()
            .then(res => {
                setVendorId(res.VendorId);
                setVendorAuth(res.VendorAuth);
                setComponents(res.Components);
            });
    };

    if (components.length == 0) {
        return null;
    }
    return (
        <VendorAppPage vendorId={vendorId} components={components} />
    )
}

export default VendorApp;
