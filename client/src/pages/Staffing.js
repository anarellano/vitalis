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
import InfoCards from "../components/InfoCards";
import PhoneNumberButton from "../components/PhoneNumberButton";
import callMeStaffing from "../images/callMeStaffing.jpg";
import SendUsMessage from "../components/SendUsMessage";

function Staffing() {
  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center min-vh-20">
        <Col className="ms-5 text-center">
          <h1 className="display-1">Join the Vitalis Family</h1>
          <p className="page-intro">
            At Vitalis Staffing, we are committed to providing exceptional
            patient care. Join our team of skilled nurses and make a difference
            in people's lives.
          </p>
          <Row>
            <Col>
              <PhoneNumberButton />
            </Col>
          </Row>
        </Col>
      </Container>

      <Container className="my-5">
        <Col md={6}>
          <h3 className="mb-3">The Best Nurses in the Industry</h3>
          <p>
            Vitalis Staffing isn't just another nursing agency. We pride
            ourselves on handpicking only the finest nurses. Our rigorous
            selection process ensures that we have a team of professionals who
            are not only qualified but are also deeply passionate about patient
            care.
          </p>
          <p>
            Our nurses undergo continuous training, are abreast with the latest
            medical research, and consistently demonstrate clinical excellence.
            When you choose Vitalis, you're opting for superior care delivered
            with compassion and competence.
          </p>
        </Col>
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

      {/* Section 2: infor cards */}
      <Container className="d-flex justify-content-around my-5">
        <Container className="d-flex justify-content-around my-5">
          <InfoCards
            title="Location"
            descption="347 Geller Blvd, Suite D1, Daly City, CA, 94015"
          />
          <InfoCards title="Phone" descption="+1 (415) 812 - 4343" />
          <InfoCards
            title="Mail"
            descption="355 Geller Blvd, Suite 110, Daly City, CA, 94015"
          />
        </Container>
      </Container>

      {/* Section 3: Client TestimonialSlider */}
      {/* <Container>
        <TestimonialSlider />
      </Container> */}

      {/* section 5: get in touch */}
      <Container className="d-flex my-5">
        <Col className="me-5 prblms">
          <SendUsMessage />
        </Col>
        <Col className="prblms prblms-content">
          <img src={callMeStaffing} alt="Call Us NOW!" />
        </Col>
      </Container>
    </div>
  );
}

export default Staffing;
