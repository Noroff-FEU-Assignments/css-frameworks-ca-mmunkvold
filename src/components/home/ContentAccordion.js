import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import Img1 from "../../images/tab/tab-1.jpg";
import Img2 from "../../images/tab/tab-2.jpg";
import Img3 from "../../images/tab/tab-3.jpg";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const ContentAccordion = () => {
  return (
    <Container>
      <Accordion defaultActiveKey="0" className="d-md-none">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordion__first">First</Accordion.Header>
          <Accordion.Body>
            <div>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
            </div>
            <Image className="tab-img w-100 my-4" src={Img1} />
            <div className="d-flex justify-content-center mb-1 ">
              <p className="text-social">Share</p>
              <div>
                <FaFacebookF className="icon" size="1.5em" />
                <FaTwitter className="icon" size="1.5em" />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Second</Accordion.Header>
          <Accordion.Body>
            <div>
              Donec at risus risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce dapibus velit
              ut pellentesque scelerisque. Etiam luctus nulla ornare, imperdiet lacus ullamcorper, tincidunt nisl.
            </div>
            <Image className="tab-img w-100 my-4" src={Img2} />
            <div className="d-flex justify-content-center mb-1">
              <p className="text-social">Share</p>
              <FaFacebookF className="icon" size="1.5em" />
              <FaTwitter className="icon" size="1.5em" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Third</Accordion.Header>
          <Accordion.Body>
            <div>
              Cras et imperdiet neque, id cursus ipsum. Donec vitae posuere libero. Pellentesque vehicula non libero vel placerat. Mauris facilisis
              maximus ante id sodales. Sed tempus mauris sapien, sit amet euismod eros tempor vitae.
            </div>
            <Image className="tab-img w-100 my-4" src={Img3} />
            <div className="d-flex justify-content-center mb-1">
              <p className="text-social">Share</p>
              <FaFacebookF className="icon" size="1.5em" />
              <FaTwitter className="icon" size="1.5em" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default ContentAccordion;
