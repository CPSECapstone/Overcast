import React, {useState, useEffect} from 'react';
import { CustomForm } from '../components';
import { Container } from 'react-bootstrap';
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

    return (
        <Container>
            <h1>
                {vendorId}
            </h1>
            <CustomForm fields={components[0].Fields}/>
        </Container>
    )
}

export default VendorApp;