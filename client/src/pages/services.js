import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
  CardBody,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

import TestimonialSlider from "../components/testimonialSlider";

function Services() {
  return (
    <div>
      <Container className="d-flex my-5">
        <Col className="prblms me-5">image of us helping</Col>
        <Col className="ms-5">
          <h1 className="display-4 " >Join the Vitalis Family</h1>
          <p className="page-intro">
            At Vitalis Staffing, we are committed to providing exceptional
            patient care. Join our team of skilled nurses and make a difference
            in people's lives.
          </p>
          <Button
            size="lg"
            className="rounded-pill btn btn-secondary text-nowrap square  bold"
            as={Link}
          >
            <a className="bt2a" href="tel:+1-415-812-4343">
              +1 (415) 812 - 4343
            </a>
          </Button>
        </Col>
      </Container>

      {/* Section 2: infor cards */}
      <Container className="d-flex justify-content-around my-5">
        <Card
          className="my-2"
          color="light"
          outline
          style={{
            width: "18rem",
          }}
        >
          <CardBody>
            <CardTitle className="bold">Location</CardTitle>
            <CardText>
              355 Geller Blvd, Suite 110, Daly City, CA, 94015
            </CardText>
          </CardBody>
        </Card>
        <Card
          className="my-2"
          color="light"
          outline
          style={{
            width: "18rem",
          }}
        >
          <CardBody>
            <CardTitle className="bold">Phone</CardTitle>
            <CardText>+1 (415) 812 - 4343</CardText>
          </CardBody>
        </Card>
        <Card
          className="my-2"
          color="light"
          outline
          style={{
            width: "18rem",
          }}
        >
          <CardBody>
            <CardTitle className="bold">Mail</CardTitle>
            <CardText>
              355 Geller Blvd, Suite 110, Daly City, CA, 94015
            </CardText>
          </CardBody>
        </Card>
      </Container>

      {/* Section 3: Client TestimonialSlider */}
      <Container>
        <TestimonialSlider />
      </Container>

      {/* Section 4: Values */}
      <Container className="mt-5">
      <div className="text-center mt-5">
  <h2 className="display-5 mb-4">Core Values</h2>
  <p className="lead">
     Our commitment to these values fuels exceptional care and service.
  </p>
</div>
        <Row className="d-flex justify-content-around">
          <Card
            className="my-2 values"
            color="light"
            outline
            style={{
              width: "40rem",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">🫱🏻‍🫲🏾 Professionalism</CardTitle>
              <CardText>
                Highest standards, dignity in patient care, and courteous
                interactions.
              </CardText>
            </CardBody>
          </Card>
          <Card
            className="my-2 values"
            color="light"
            outline
            style={{
              width: "40rem",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">📞 Availability</CardTitle>
              <CardText>
                24/7 support for seamless client care, whenever you need it.
              </CardText>
            </CardBody>
          </Card>
        </Row>
        <Row className="d-flex justify-content-around">
          <Card
            className="my-2 values"
            color="light"
            outline
            style={{
              width: "40rem",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">👨‍⚕️ Experienced</CardTitle>
              <CardText>
                Seasoned professionals making a difference in patient outcomes.
              </CardText>
            </CardBody>
          </Card>
          <Card
            className="my-2 values"
            color="light"
            outline
            style={{
              width: "40rem",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">🌐 Transparency</CardTitle>
              <CardText>
                Clear communication and openness, fostering trust in our
                services.
              </CardText>
            </CardBody>
          </Card>
        </Row>
      </Container>

      {/* section 5: get in touch */}
      <Container className="d-flex my-5">
        <Col className="me-5">
          <Form>
            <FormGroup>
              <h2 className="display-5" >Get in touch</h2>
              <p>we would love to here from you</p>
              <Input className="me-5" placeholder="First Name" />
              <Input className="mt-4" placeholder="Last Name" />

              <Input
                className="mt-4"
                type="email"
                id="email"
                placeholder="Email"
              />
              <Input
                className="mt-4"
                type="number"
                id="number"
                placeholder="Phone number"
              />
              <Input
                className="mt-4"
                type="textarea"
                name="text"
                id="exampleText"
                placeholder="Send us a message"
              />
            </FormGroup>
          </Form>
        </Col>
        <Col className="prblms me-5">image of us helping</Col>
      </Container>
    </div>
  );
}

export default Services;
