import React, {useState, useEffect} from 'react';
import { CustomForm } from '../components';
import { Container } from 'react-bootstrap';
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
        api.getVendorAppData()
        .then(res => {
            setVendorApp(res);
        });
    };

    return (
        <Container>
            <h1>
                {vendorApp.VendorId}
            </h1>
            <CustomForm fields={vendorApp.Components[0].Fields}/>
        </Container>
    )
}

export default VendorApp;