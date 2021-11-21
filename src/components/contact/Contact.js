import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "./ContactForm";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="order-md-2">
            <ListGroup>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <FontAwesomeIcon className="contact__icon" icon="envelope" />
                <div className="ms-2 me-auto">
                  <div>hello@yay.com</div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <FontAwesomeIcon className="contact__icon" icon="phone" />
                <div className="ms-2 me-auto">
                  <div>123 456 7890</div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <FaMapMarkerAlt className="contact__icon" />
                <div className="ms-2 me-auto">
                  <div>123 Some Street</div>
                  <div>Somewhere</div>
                  <div>Some City</div>
                  <div>100000</div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6} className="order-md-1">
            <h1>Submit your details</h1>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
