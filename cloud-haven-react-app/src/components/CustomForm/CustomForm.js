import React, {useState, useEffect} from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import './CustomForm.css';

const testCompanyName = "CalPoly";
const testFormName = "FormName";

// Props would include company name and form name
export default props => {
    
    useEffect(() => {
        getFormData()
    }, []);
    
    const [formFields, setFormFields] = useState({
        fields: []
    });

    const getFormData = () => {
        setFormFields(props.fields)
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
                    <Col xs={getColumnSize(field.Child)}>
                        <Form.Group>
                            <Form.Label>{field.label}</Form.Label>
                            <Form.Control type={field.Child} placeholder={field.placeholder ? field.placeholder : ""}/>
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
