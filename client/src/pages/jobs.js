import React, { useRef } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
  CardBody,
  Input,
  Form,
  FormGroup,
} from "reactstrap";
import BottomBox from "../components/bottomBox.js";
import TestimonialSlider from "../components/testimonialSlider.js";

function Jobs() {
  return (
    <div>
      {/* Section 1: Hook; real them in */}
      <Container className="d-flex mt-5">
        <Col>
          <h1>Explore Nursing Opportunities</h1>
          <p className="page-intro">
            At Vitalis Staffing, we are committed to providing exceptional
            patient care. Join our team of skilled nurses and make a difference
            in people's lives.
          </p>
          <Button>Apply Now</Button>
        </Col>
        <Col className="prblms me-5">image of us helping</Col>
      </Container>

      {/* Section 2: Bring them in with pay statistics */}
      <Container className="d-flex mt-5">
        <Col className="prblms me-5">image of us helping</Col>
        <Col>
          {" "}
          WE HIRE ALL CNA, RN, LVN put a descriptio outlining how much we pay{" "}
        </Col>
      </Container>
      {/* section 3: CTO  */}
      <Container className="mt-5">
        <div className="text-center mt-5">
          <h2 className="display-5 mb-4">Career Opportunities</h2>
          <p className="lead">
          Pursue Your Passion and Embark on a Rewarding Journey in Healthcare. 
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
              <CardTitle tag="h5">Licensed Vocational Nurse</CardTitle>
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
              <CardTitle tag="h5">Registered Nurse</CardTitle>
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
              <CardTitle tag="h5">Certified Nursing Assistant</CardTitle>
              <CardText>
                Seasoned professionals making a difference in patient outcomes.
              </CardText>
            </CardBody>
          </Card>

        </Row>
      </Container>
      <Container className="d-flex flex-column align-items-center mt-5">
        <h2 className="align-items-center">What Other Nurses Say About Us</h2>
         <TestimonialSlider />
      </Container>
           
      {/* Section 5: Educational Program */}
      <Container className="d-flex flex-column align-items-center mt-5">

    <h2 className="display-5">Transform Your Career: Become an LVN</h2>
    <p>
      Elevate your journey from CNA to Licensed Vocational Nurse. Enroll in our comprehensive LVN program and unlock endless possibilities for a fulfilling nursing career.
    </p>
    <Button color="primary" >Learn More</Button>

</Container>


      {/* Section 6: Info cards */}
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

      <Container className="d-flex my-5">
        <Col className="me-5">
          <Form>
            <FormGroup>
              <h2 className="display-5">Get in touch</h2>
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
      <BottomBox />
    </div>
  );
}

export default Jobs;
