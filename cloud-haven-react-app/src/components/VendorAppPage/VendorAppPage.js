import React from 'react';
import { CustomForm } from '../components';
import { Container } from 'react-bootstrap';
import './VendorAppPage.css';

export default props => {
    return (
        <Container>
            <h1>
                {props.vendorId}
            </h1>
            <CustomForm fields={props.components[0].Fields}/>
        </Container>
    )
}
