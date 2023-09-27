import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import BottomBox from "../components/bottomBox";


export default function AboutUs(props) {
  return (
    <div className="about-us">
      <Container className="my-container my-5">
        <Row>
          {" "}
          <h1 className="display-3">Unlock your true worth</h1>
          <p className="lead">
            We're Vitalis Staffing - the nursing agency you have been waiting
            for
          </p>
          <hr className="my-2" />
          <p>
            {" "}
            Embark on a transformative journey with us as we prioritize the
            well-being of nurses and essential workers. Enjoy exceptional
            benefits, including higher pay, flexible schedules, dental and
            health insurance, and more!"
          </p>
          <section>
            <Button
              className="rounded-pill"
              color="primary"
              size="large"
              style={{ width: "176px", height: "44px" }}
            >
              Large
            </Button>
            <Button
              className="rounded-pill btn2"
              size="large"
              style={{ width: "176px", height: "44px" }}
            >
              <a className="bt2a" href="tel:+1-415-812-4343">
                (415) 812-4343
              </a>
            </Button>
          </section>
        </Row>
      </Container>

      {/* Section 2: group phoyo */}
      <Container className="my-5 grpPhoto"></Container>

      {/* section 3: problem with other agencies and hospitals */}
      <Container className="my-5">
        <Row>
          <Col>
            <Container>
              <h2>problems with different agecies</h2>
            </Container>
            <Container>
              <Button
                color="primary"
                size="large"
                className="rounded-pill "
                style={{ width: "176px", height: "44px" }}
              >
                Large
              </Button>
            </Container>
          </Col>
          <Col className="prblms">image of us helping</Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {/* <Col md="6"> */}
          <h2>Our Story</h2>
          <p>
            In 2022, fueled by an unwavering passion for justice and an
            unyielding commitment to fairness, Raquel and Justine embarked on a
            transformative journey. Together, they founded Vitalis Staffing,
            driven by a shared mission to address the pressing issues of pay
            inequality, lack of flexibility, and mistreatment faced by medical
            professionals. Today, our hearts beat with determination as we
            extend our fight, united in our unwavering dedication to empower
            nurses across California and create a future where justice, respect,
            and equity reign. Join us on this heartfelt journey as we champion
            your rights, stand tall in solidarity, and work hand in hand to
            build a stronger, more compassionate, and truly equitable healthcare
            system.
          </p>
          {/* </Col> */}
          {/* <Col md="6">
              <img
                src="/images/about-us-image.jpg"
                alt="Why Choose Us"
                className="img-fluid"
              />
            </Col> */}
        </Row>
      </Container>

      <Container className="my-5">
        <Row>
          <Col className="prblms">Want to chat and learn more about us?</Col>
          <Col>
            <Container>
              <h2>Want to chat and learn more about us?</h2>
              <p>
                give us a call and we would be delighted to answer all your
                questions and concerns
              </p>
            </Container>
            <Container>
              <Button
                color="primary"
                size="large"
                className="rounded-pill "
                style={{ width: "176px", height: "44px" }}
              >
                Large
              </Button>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container>
        <h2>Meet Our Team</h2>
        <Row xs="1" sm="2" md="4" className="g-4">
          <Col>
            <Card className="cardBodySize">
              {/* <CardImg
                  top
                  width="100%"
                  src="/images/team-member1.jpg"
                  alt="Team Member"
                /> */}
              <CardBody>
                <CardTitle tag="h5">Justine Acuña</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  CEO
                </CardSubtitle>
                <CardText className="cardBodySize">
                  Justine Acuna, the CEO of VitaliStaffing, has fulfilled her
                  passion for equality and care by opening her own nursing
                  agency. With Justine at the helm, VitaliStaffing embodies a
                  commitment to exceptional healthcare and a nurturing
                  environment that sets it apart in the industry.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="cardBodySize">
              {/* <CardImg
                  top
                  width="100%"
                  src="/images/team-member2.jpg"
                  alt="Team Member"
                /> */}
              <CardBody>
                <CardTitle tag="h5">Raquel Heck</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  COO
                </CardSubtitle>
                <CardText className="cardBodySize">
                  Raquel Heck, COO of the organization, is the driving force
                  behind the seamless operations and team success at
                  VitaliStaffing. With her exceptional leadership, she ensures
                  that every aspect runs smoothly, paving the way for the
                  agency's continued excellence.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="cardBodySize">
              {/* <CardImg
                  top
                  width="100%"
                  src="/images/team-member3.jpg"
                  alt="Team Member"
                /> */}
              <CardBody>
                <CardTitle tag="h5">Elizabeth Beljica</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Operations Manager
                </CardSubtitle>
                <CardText className="cardBodySize">
                  Elizabeth Belgica, highly collaborative Operating Manager,
                  excels at working closely with both the nursing staff and all
                  other team members. Through her effective communication, she
                  fosters a harmonious work environment that maximizes
                  productivity and overall success.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="cardBodySize">
              {/* <CardImg
                  top
                  width="100%"
                  src="/images/team-member4.jpg"
                  alt="Team Member"
                /> */}
              <CardBody>
                <CardTitle tag="h5">Anton Arellano</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Financial Analyst
                </CardSubtitle>
                <CardText className="cardBodySize">
                  Anton Arellano, our adept Financial Analyst, is an integral
                  part of VitaliStaffing, providing essential updates on
                  payroll, profits, and cost-cutting strategies. His expertise
                  enables us to make informed decisions that optimize our
                  financial performance and drive growth, ensuring a prosperous
                  future for our organization.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <BottomBox />
    </div>
  );
}


