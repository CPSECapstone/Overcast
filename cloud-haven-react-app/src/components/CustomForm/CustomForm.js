import React, {useState, useEffect} from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import './CustomForm.css';
import * as api from '../../api.js';

const testCompanyName = "CalPoly";
const testFormName = "FormName";

// Props would include company name and form name
export default props => {

    // bruh

    useEffect(() => {
        getFormData()
    }, []);
    
    const [formData, setFormData] = useState({
        formDescription: '',
        fields: []
    });

    const getFormData = () => {
        /*api.getFormData(testCompanyName, testFormName)
         .then(res => {
            setFormData(res)
        })*/
        setFormData({
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
            }
            ]});
    };

    // TODO: add all columned fields
    const getColumnSize = (fieldType) => {
        const smallFields = ["textbox", "phoneNumber", "password"];
        return smallFields.includes(fieldType) ? 6 : 12;
    }

    // TODO: add checks for as=textarea rather than type="..."
    const populateForm = () => {
        return formData.fields.map((field) => {
            return (
                    <Col xs={getColumnSize(field.type)}>
                        <Form.Group>
                            <Form.Label>{field.label}</Form.Label>
                            <Form.Control type={field.type} placeholder={field.placeholder ? field.placeholder : ""}/>
                        </Form.Group>
                    </Col>);
        });
    };

    return (
        <Container className="CustomFormContainer">
            <h1>
                {testFormName}
            </h1>
            <Container className="FormBox">
                <div className="FormDescription">
                    {formData.formDescription}
                </div>
                <Form>
                    <Row>
                        {populateForm()}
                    </Row>
                    <Button className="SubmitButton">
                        <b>Submit</b>
                    </Button>
                </Form> 
            </Container>
        </Container>
    )
}
