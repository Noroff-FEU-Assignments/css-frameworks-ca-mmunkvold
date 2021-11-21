import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Image from "react-bootstrap/Image";
import Img1 from "../../images/tab/tab-1.jpg";
import Img2 from "../../images/tab/tab-2.jpg";
import Img3 from "../../images/tab/tab-3.jpg";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const ContentTabs = () => {
  return (
    <div className="d-none d-md-block">
      <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="first" title="First">
          <div className="d-flex justify-content-between align-items-start">
            <Image className="tab-img" src={Img1} />
            <div>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
              </p>
              <div className="d-flex mb-1">
                <p className="text-social">Share</p>
                <FaFacebookF className="icon" size="1.5em" />
                <FaTwitter className="icon" size="1.5em" />
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="second" title="Second">
          <div className="d-flex justify-content-between align-items-start">
            <Image className="tab-img" src={Img2} />
            <div>
              <p>
                Donec at risus risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce dapibus
                velit ut pellentesque scelerisque. Etiam luctus nulla ornare, imperdiet lacus ullamcorper, tincidunt nisl.
              </p>
              <div className="d-flex mb-1">
                <p className="text-social">Share</p>
                <FaFacebookF className="icon" size="1.5em" />
                <FaTwitter className="icon" size="1.5em" />
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="third" title="Third">
          <div className="d-flex justify-content-between align-items-start">
            <Image className="tab-img" src={Img3} />
            <div>
              <p>
                Cras et imperdiet neque, id cursus ipsum. Donec vitae posuere libero. Pellentesque vehicula non libero vel placerat. Mauris facilisis
                maximus ante id sodales. Sed tempus mauris sapien, sit amet euismod eros tempor vitae.
              </p>
              <div className="d-flex mb-1">
                <p className="text-social">Share</p>
                <FaFacebookF className="icon" size="1.5em" />
                <FaTwitter className="icon" size="1.5em" />
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ContentTabs;
