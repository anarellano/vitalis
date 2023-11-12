import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap";
import ApplyNowButton from "../components/ApplyNowButton.js";
import BottomBox from "../components/BottomBox.js";
import callSomeone from "../images/callSomeone.jpg";
import money from "../images/money.jpg";
import insurance from "../images/insurance.jpg";
import vacation from "../images/vacation.jpg";
import SendUsMessage from "../components/SendUsMessage.js";

function Jobs() {
  return (
    <div>
      {/* Section 1: Hook; real them in */}
      <Container className="d-flex mt-5">
        <Col className="prblms">
          <h1>Explore Nursing Opportunities</h1>
          <p className="page-intro">
            At Vitalis Staffing, we are committed to providing exceptional
            patient care. Join our team of skilled nurses and make a difference
            in people's lives.
          </p>
          <ApplyNowButton />
        </Col>
        {/* <Col className="prblms prblms-content">image of us helping</Col> */}
      </Container>

      {/* Section 2: Bring them in with pay statistics */}
      {/* <Container className="d-flex mt-5">
        <Col className="prblms me-5">image of us helping</Col>
        <Col>
          {" "}
          WE HIRE ALL CNA, RN, LVN put a descriptio outlining how much we pay{" "}
        </Col>
      </Container> */}

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
                <p>
                  Compensation:<strong> $45/hr</strong>
                </p>
                <p>
                  Highest standards, dignity in patient care, and courteous
                  interactions.
                </p>
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
                <p>
                  Compensation:<strong> $75/hr</strong>
                </p>
                <p>
                  24/7 support for seamless client care, whenever you need it.
                </p>
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
                <p>
                  Compensation:<strong> $22.5/hr</strong>
                </p>
                <p>
                  Seasoned professionals making a difference in patient
                  outcomes.
                </p>
              </CardText>
            </CardBody>
          </Card>
        </Row>
      </Container>

      {/* <Container className="d-flex flex-column align-items-center mt-5">
        <h2 className="align-items-center">What Other Nurses Say About Us</h2>
         <TestimonialSlider />
      </Container> */}

      {/* Section 5: Educational Program */}
      {/* <Container className="d-flex flex-column align-items-center mt-5">

    <h2 className="display-5">Transform Your Career: Become an LVN</h2>
    <p>
      Elevate your journey from CNA to Licensed Vocational Nurse. Enroll in our comprehensive LVN program and unlock endless possibilities for a fulfilling nursing career.
    </p>
    <Button color="primary" >Learn More</Button>

</Container> */}

      <Container className="my-5">
        <h2 className="display-5 text-center mb-5">Benefits We Offer!</h2>

        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <CardBody>
                <img
                  src={vacation}
                  alt="flexibility"
                  className="mb-3 img-fluid"
                />
                <h4>Unmatched Flexibility</h4>
                <p>
                  At Vitalis Staffing, we offer exceptionally flexible rates.
                  Pick up shifts as per your convenience, giving you more
                  control over your life.
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <CardBody>
                <img
                  src={insurance}
                  alt="insurance"
                  className="mb-3 img-fluid"
                />
                <h4>Insurance for Full-Time Employees</h4>
                <p>
                  Full-time employees at Vitalis Staffing are our priority.
                  Enjoy comprehensive medical insurance coverage.
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <CardBody>
                <img
                  src={money}
                  alt="competitive pay"
                  className="mb-3 img-fluid"
                />
                <h4>Competitive Compensation</h4>
                <p>
                  Recognizing your dedication, we offer a compensation that
                  stands out in the industry.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <BottomBox />

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
            <CardText>347 Geller Blvd, Suite D1, Daly City, CA, 94015</CardText>
          </CardBody>
        </Card>
      </Container>

      <Container className="d-flex my-5">
        <Col className="me-5 prblms">
          <SendUsMessage />
        </Col>
        <Col className="prblms prblms-content">
          <img src={callSomeone} alt="call someone" />
        </Col>
      </Container>
    </div>
  );
}

export default Jobs;
