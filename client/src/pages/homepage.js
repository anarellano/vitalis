import React from "react";
import { Button } from "reactstrap";
import { Card, Container, Row, Col } from "react-bootstrap";

import Faq from "../components/faq.js";
import TestimonialSlider from "../components/testimonialSlider.js";
import BottomBox from '../components/BottomBox.js';
import timetable from "../images/timetable.png";
import money from "../images/money.png";
import trophy from "../images/trophy.png";
import medium from "../images/medium.png";
// import ApplyNow from "./ApplyNow";
import firstPicture from "../images/firstPicture.jpg";
import nurseArmy from "../images/nurseArmy.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ApplyNowButton from "../components/ApplyNowButton.js";
import hiringNurses from "../images/hiringNurses.jpg";
import hiringNursesOne from "../images/hiringNursesOne.jpg";
import hiring from "../images/hiring.jpg";
import PhoneNumberButton from "../components/PhoneNumberButton.js";

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
              Click the "Apply Now" button below.
            </h4>
            <section className="d-flex">
              <ApplyNowButton />
              <PhoneNumberButton />

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
          <Col><img className="prblms" src={firstPicture}  alt="Description"/></Col>
          <Col className="d-flex flex-column">
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
                "Earn up to 29% more than the average
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
      <Container className="my-5">
        <Row md={8}>
          <Col>
            <Col>
              <h1 className="homepageHeaders textCenter">Join Our Elite Nursing Team</h1>
              <h4 className="textCenter">
                We're on the lookout for dedicated and passionate nurses ready
                to make a difference.
              </h4>
            </Col>
            <Col className="my-5">
              <Row className="textCenter">
                <h5>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: "#ffb514" }}
                  />{" "}
                  Registered Nurses (RN)
                </h5>
                <p>
                  Be at the forefront of patient care, ensuring the best
                  outcomes with your expertise.
                </p>
              </Row>
              <Row className="textCenter pt-5">
                <Col>
                  <h5>
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ color: "#ffb514" }}
                    />{" "}
                    Licensed Vocational Nurses (LVN)
                  </h5>
                  <p>
                    Play a pivotal role in patient recovery with your
                    specialized skills and care.
                  </p>
                </Col>
                <Col>
                  <h5>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ color: "#ffb514" }}
                    />{" "}
                    Certified Nursing Assistants (CNA)
                  </h5>
                  <p>
                    Support our nursing team and be an essential part of our
                    patient's journey to wellness.
                  </p>
                </Col>
              </Row>
            </Col>
          </Col>
          {/* <Col md={3} className="d-flex flex-row-reverse">
            <img className="prblms" src={nurseArmy} alt="Image of Nurses" />
          </Col> */}
        </Row>
      </Container>
      {/* Section 4: the proccess of hiring */}
      <Container className=" my-5">
        {" "}
        <Row className="d-flex">
          <Col className="d-grid gap-3">
            <Row className="flex-column align-items-start mb-4">
              <h1>1. Apply Online</h1>
              <p className="mb-2">
                Fill out our online application to get started with the hiring
                process.
              </p>
            </Row>
            <Row className="flex-column align-items-start mb-4">
              <h1>2. Orientation</h1>
              <p className="mb-2">
                Attend an orientation session to understand our work culture and
                expectations.
              </p>
            </Row>
            <Row className="flex-column align-items-start">
              <h1>3. Deployment</h1>
              <p>
                Once approved, you'll be deployed to your designated work
                location.
              </p>
            </Row>
          </Col>

          <Col>
            <img className="prblms" src={hiring} alt="Hire Nurses" />
          </Col>
        </Row>
      </Container>

      {/* Section 5:  testimonials, slide show? */}
      <Container className=" my-5">
        {" "}
        <Row className="d-flex">
          <h1 style={{ textAlign: "center" }}>What our great nurses say about us</h1>
          <TestimonialSlider />
        </Row>{" "}
      </Container>

      {/* section 6: FAQ with number and email again one the right side */}
      {/* <Container className=" my-5">
        {" "}
        <Row className="d-flex">
          <Col></Col>
          <Col>
            <Faq />
          </Col>
        </Row>{" "}
      </Container> */}

      {/* section 7: Call to action */}
   <BottomBox />
    </div>
  );
}

export default Homepage;
