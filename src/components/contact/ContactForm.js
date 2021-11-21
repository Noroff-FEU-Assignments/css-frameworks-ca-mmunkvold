import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="contact-form">
      <Row>
        <Form.Group className="mb-4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" defaultValue="" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="validationCustomUsername">
          <Form.Label>Website</Form.Label>
          <InputGroup>
            <InputGroup.Text className="d-none d-md-block" id="inputGroupPrepend">
              https://
            </InputGroup.Text>
            <Form.Control type="text" aria-describedby="inputGroupPrepend" required />
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
      </Row>
      <Form.Group className="mb-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
      </Form.Group>
      <Button className="contact-form__button" type="submit">
        Submit
      </Button>
    </Form>
  );
}

/* render(<ContactForm />); */ //i think i can remove this one line...

export default ContactForm;
