import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import profile from "../../../images/profile-user.png";
import checkmark from "../../../images/black-checkmark.png";
import * as api from '../../../api.js';
import './AppDataRow.css';

// need to add this comment to open a PR

export default props => {
    const [vendorId, setVendorId] = useState("");
    const [vendorName, setVendorName] = useState("");

    useEffect(() => {
        getVendorAppData();
    }, []);

    const getVendorAppData = () => {
        api.getVendorAppData()
            .then(res => {
                setVendorId(res.VendorId);
                setVendorName(res.VendorName);
            });
    };

    return (
        <Container>
            <Row className="AppDataRow">
                <Col>
                    <div className="VendorIcon">
                        <img src={profile} height="84"/>
                    </div>
                </Col>
                <Col>
                    <div class="VendorName" >
                        <b>{vendorName}</b>
                    </div>
                </Col>
                <Col className="checkbox" md={{ offset: 1 }}>
                    <input type="checkbox" />
                    <span class="overlay">
                        <img src={checkmark} class="icon" height="53"/>
                    </span>
                </Col>
                <Col className="checkbox">
                    <input type="checkbox"/>
                    <span class="overlay">
                        <img src={checkmark} class="icon" height="53"/>
                    </span>
                </Col>
                <Col className="checkbox">
                    <input type="checkbox"/>
                    <span class="overlay">
                        <img src={checkmark} class="icon" height="53"/>
                    </span>
                </Col>
                <Col className="checkbox">
                    <input type="checkbox"/>
                    <span class="overlay">
                        <img src={checkmark} class="icon" height="53"/>
                    </span>
                </Col>
            </Row>
        </Container>
    )

}
