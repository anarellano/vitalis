import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import Faq from "../components/Faq.js";
import BottomBox from '../components/BottomBox.js';
import timetable from "../images/timetable.png";
import money from "../images/money.png";
import trophy from "../images/trophy.png";
import medium from "../images/medium.png";
import firstPicture from "../images/firstPicture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ApplyNowButton from "../components/ApplyNowButton.js";
import hiring from "../images/hiring.jpg";
import PhoneNumberButton from "../components/PhoneNumberButton.js";

function Homepage() {
  const questionsAndAnswers = [
    {
      question: "What are the pay rates, and do you offer benefits or bonuses?",
      answer: "Pay rates vary based on location and facility. Full-time employees receive health and dental benefits. Specifics can be discussed further based on your qualifications and preferences."
    },
    {
      question: "How flexible are the schedules? Can I choose preferred shifts or locations?",
      answer: "We offer flexible schedules, allowing you to choose preferred shifts and locations within our affiliated facilities in the Bay Area."
    },
    {
      question: "What types of assignments are available?",
      answer: "We offer a variety of full-time and part-time assignments, including positions as Registered Nurses, Licensed Vocational Nurses, and Certified Nursing Assistants."
    },
    // {
    //   question: "Do you provide orientation or training for new assignments?",
    //   answer: "Yes, we provide comprehensive on-site training and orientation, along with bi-monthly check-ins for continuous support and assessment."
    // },
    // {
    //   question: "Do you assist with obtaining CNA licenses or reimburse these costs?",
    //   answer: "Yes, we support your nursing education pursuits, covering expenses related to obtaining a CNA license through a school-to-work program agreement."
    // },
    // {
    //   question: "Do you provide housing or stipends for travel nurses?",
    //   answer: "Yes, we offer housing and travel support, varying based on the contract. Specifics are negotiated during the hiring process."
    // },
    // {
    //   question: "What support can I expect from my recruiter or point of contact?",
    //   answer: "You can reach out 24/7 for work-related concerns. Expect prompt and supportive communication to assist with any issues or queries."
    // }
  ];
  
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
        <Col className="prblms prblms-content"><img  src={firstPicture}  alt="Description"/></Col>
          <Col className="d-flex flex-column">
            <Card.Body className="threeReasonRow">
              <Card.Title>
                <img src={timetable} alt="timetable" />
                Flexible Hours
              </Card.Title>
              <Card.Text>
                "Reclaim your time with flexible hours, giving you the freedom
                to choose when to work."
              </Card.Text>
            </Card.Body>

            <Card.Body className="threeReasonRow">
              <Card.Title>
                <img src={money} alt="money" />
                Competitive Rates
              </Card.Title>
              <Card.Text>
                "Earn up to 29% more than the average
                hourly wage in the Bay Area!"
              </Card.Text>
            </Card.Body>

            <Card.Body className="threeReasonRow">
              <Card.Title>
                <img src={trophy} alt="throphy"/>
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
        {/* First Column: Hiring Steps */}
        <Col className="process-steps">
            <Row className="flex-column align-items-start justify-content-between">
                {/* Step 1 */}
                <div className="step mb-4">
                    <h1>1. Apply Online</h1>
                    <p className="mb-2">
                        Fill out our online application to get started with the hiring process.
                    </p>
                </div>
                {/* Step 2 */}
                <div className="step mb-4">
                    <h1>2. Orientation</h1>
                    <p className="mb-2">
                        Attend an orientation session to understand our work culture and expectations.
                    </p>
                </div>
                {/* Step 3 */}
                <div className="step">
                    <h1>3. Deployment</h1>
                    <p>
                        Once approved, you'll be deployed to your designated work location.
                    </p>
                </div>
            </Row>
        </Col>
          <Col className="prblms prblms-content">

            <img src={hiring} alt="Hire Nurses" />
          </Col>
        </Row>
      </Container>

      {/* Section 5:  testimonials, slide show? */}
      {/* <Container className=" my-5">
        {" "}
        <Row className="d-flex">
          <h1 style={{ textAlign: "center" }}>What our great nurses say about us</h1>
          <TestimonialSlider />
        </Row>{" "}
      </Container> */}

      {/* section 6: FAQ with number and email again one the right side */}
      <Container className=" my-5">
        <Row className="d-flex">
          <Col></Col>
          <Col>
            <Faq items={questionsAndAnswers}/>
          </Col>
        </Row>
      </Container>

      {/* section 7: Call to action */}
   <BottomBox />
    </div>
  );
}

export default Homepage;
