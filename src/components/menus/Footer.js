import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaYoutube, FaVimeoV } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer>
      <Container className="container__footer justify-content-evenly">
        <Row className="">
          <Col xs={12} md={4} className="text-center text-md-start">
            <div className="footer__icon">
              <FaVimeoV className="vimeo-icon" size="2em" />
              <FaYoutube size="2.2em" />
            </div>
          </Col>
          <Col xs={6} md={4} className="text-md-center">
            hello@yay.com
          </Col>
          <Col xs={6} md={4} className="text-end">
            <a href="index.html">Copyright 2020</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
