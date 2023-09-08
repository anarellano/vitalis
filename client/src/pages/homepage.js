import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Card, Container, Row, Col } from "react-bootstrap";

import Faq from "/Users/antonarellano/Vitalis/client/src/components/faq.js";
import TestimonialSlider from "/Users/antonarellano/Vitalis/client/src/components/testimonialSlider.js";
import BottomBox from '/Users/antonarellano/Vitalis/client/src/components/bottomBox.js';

import timetable from "/Users/antonarellano/Vitalis/client/src/images/images/timetable.png";
import money from "/Users/antonarellano/Vitalis/client/src/images/images/money.png";
import trophy from "/Users/antonarellano/Vitalis/client/src/images/images/trophy.png";
import medium from "/Users/antonarellano/Vitalis/client/src/images/images/medium.png";
// import ApplyNow from "./ApplyNow";


function Homepage() {
  return (
    <div>
      <Container className="my-5">
        {/* Section 1: Apply now button with contact */}
        <Row className="firstRow">
          <Col sm={8}>
            <h1 className="mb-1 firstHeader">
              Advance Your Nursing Career with Vitalis Staffing
            </h1>
            <h4 className="mb-3 text-warp">
              At Vitalis Staffing, we recruit top-tier nurses in the Bay Area.
              Join us for Flexible Scheduling, Competitive Pay, and Endless
              Growth Opportunities. Click the "Apply Now" button below.
            </h4>
            <section className="d-flex">
              <Button
                color="primary"
                size="lg"
                className="text-nowrap apply square bg-primary rounded-pill bold"
                as={Link}
              >
                <a
                  style={{
                    width: "150px",
                    textAlign: "center",
                    color: "white",
                    textDecoration: "none",
                  }}
                  href="/ApplyNow"
                >
                  Apply Now
                </a>
              </Button>

              <Button className="rounded-pill btn2">
                <a className="bt2a" href="tel:+1-415-812-4343">
                  (415) 812-4343
                </a>
              </Button>
            </section>
          </Col>
          <Col
            sm={4}
            className="d-flex align-items-center justify-content-center"
          >
            <img
              src={medium}
              alt="logo"
              style={{ width: "80%", maxWidth: "250px" }}
            />
          </Col>
        </Row>
      </Container>

      {/* Section 2: Cater to Audience/nurse beneifits */}
      <Container className="threeReasonRowPadding my-5">
        <Row>
          <Col className="prblms">image of us helping</Col>
          <Col>
            <Card.Body className="threeReasonRow">
              <Card.Title>
                <img src={timetable} />
                Flexible Hours
              </Card.Title>
              <Card.Text>
                "Reclaim your time with flexible hours, giving you the freedom
                to choose when to work."
              </Card.Text>
            </Card.Body>

            <Card.Body className="threeReasonRow">
              <Card.Title>
                <img src={money} />
                Competitive Rates
              </Card.Title>
              <Card.Text>
                "Join our nursing team and earn up to 29% more than the average
                hourly wage in the Bay Area!"
              </Card.Text>
            </Card.Body>

            <Card.Body className="threeReasonRow">
              <Card.Title>
                <img src={trophy} />
                Opportunity to Grow
              </Card.Title>
              <Card.Text>
                "Grow your nursing career with us through continuous learning
                and advancement opportunities."
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>

      {/* section 3: who are we hiring and where we operate */}
      <Container className=" my-5">
        {" "}
        <Row className="d-flex">
          <Col>
            <ul>
              <li>Apply to job</li>
              <li>Interview/ orientation</li>
              <li>Scheduling</li>
            </ul>
          </Col>
          <Col className="prblms">image of us helping</Col>
        </Row>{" "}
      </Container>
      {/* Section 4: the proccess of hiring */}
      <Container className=" my-5">
        {" "}
        <Row className="d-flex">
          <Col className="prblms">image of us helping</Col>
          <Col>
            <ul>
              <li>Apply to job</li>
              <li>Interview/ orientation</li>
              <li>Scheduling</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Section 5:  testimonials, slide show? */}
      <Container className=" my-5">
        {" "}
        <Row className="d-flex">
          <h2 style={{ textAlign: "center" }}>What our clients say about us</h2>
          <TestimonialSlider />
        </Row>{" "}
      </Container>

      {/* section 6: FAQ with number and email again one the right side */}
      <Container className=" my-5">
        {" "}
        <Row className="d-flex">
          <Col></Col>
          <Col>
            <Faq />
          </Col>
        </Row>{" "}
      </Container>

      {/* section 7: Call to action */}
   <BottomBox />
    </div>
  );
}

export default Homepage;
