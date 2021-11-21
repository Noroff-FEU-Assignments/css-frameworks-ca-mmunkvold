import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" defaultActiveKey="/">
        <Container className="container__nav">
          <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} eventKey="/" to="/" exact>
                Home
                <span class="sr-only">(current)</span>
              </Nav.Link>
              <Nav.Link as={Link} eventKey="/news" to="/news">
                News
              </Nav.Link>
              <Nav.Link as={Link} eventKey="/contact" to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex justify-content-center">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Go</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
