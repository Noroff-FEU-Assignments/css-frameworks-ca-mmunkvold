import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Img1 from "../../images/news/news-1.jpg";
import Img2 from "../../images/news/news-2.jpg";
import Img3 from "../../images/news/news-3.jpg";
import Img4 from "../../images/news/news-4.jpg";
import Img5 from "../../images/news/news-5.jpg";
import Img6 from "../../images/news/news-6.jpg";
import Img7 from "../../images/news/news-7.jpg";
import Img8 from "../../images/news/news-8.jpg";

const Cards = () => {
  return (
    <>
      <Row>
        <Col className="col-12 col-md-6 col-lg-3 mrg-btm">
          <Card>
            <Card.Img variant="top" src={Img1} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <div className="d-grid gap-2">
                <Button className="btn__news" variant="primary" size="lg">
                  More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 col-md-6 col-lg-3 mrg-btm">
          <Card>
            <Card.Img variant="top" src={Img2} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <div className="d-grid gap-2">
                <Button className="btn__news" variant="primary" size="lg">
                  More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 col-md-6 col-lg-3 mrg-btm">
          <Card>
            <Card.Img variant="top" src={Img3} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <div className="d-grid gap-2">
                <Button className="btn__news" variant="primary" size="lg">
                  More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 col-md-6 col-lg-3 mrg-btm">
          <Card>
            <Card.Img variant="top" src={Img4} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <div className="d-grid gap-2">
                <Button className="btn__news" variant="primary" size="lg">
                  More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 col-md-6 col-lg-3 mrg-btm">
          <Card>
            <Card.Img variant="top" src={Img5} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <div className="d-grid gap-2">
                <Button className="btn__news" variant="primary" size="lg">
                  More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 col-md-6 col-lg-3 mrg-btm">
          <Card>
            <Card.Img variant="top" src={Img6} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <div className="d-grid gap-2">
                <Button className="btn__news" variant="primary" size="lg">
                  More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 col-md-6 col-lg-3 mrg-btm">
          <Card>
            <Card.Img variant="top" src={Img7} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <div className="d-grid gap-2">
                <Button className="btn__news" variant="primary" size="lg">
                  More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 col-md-6 col-lg-3 mrg-btm">
          <Card>
            <Card.Img variant="top" src={Img8} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <div className="d-grid gap-2">
                <Button className="btn__news" variant="primary" size="lg">
                  More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Cards;
