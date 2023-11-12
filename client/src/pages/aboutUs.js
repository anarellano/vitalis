import React from "react";
import { Container, Row, Col } from "reactstrap";
import ApplyNowButton from "../components/ApplyNowButton";
import BottomBox from "../components/BottomBox";
import EmployeeCard from "../components/EmployeeCard";
import PhoneNumberButton from "../components/PhoneNumberButton";
import callMe from "../images/callMe.jpg";
import familyOfNurse from "../images/familyOfNurse.jpg";
import anton from "../images/anton.jpg";
import justine from "../images/justine.jpg";
import raquel from "../images/raquel.jpg";

export default function AboutUs(props) {
  return (
    <div className="about-us">
      <Container className="my-container my-5">
        <Row>
          <h1 className="display-3">Unlock your true worth</h1>
          <p>
            We're Vitalis Staffing - the nursing agency you have been waiting
            for
          </p>
          <hr />
          <p className="">
            Embark on a transformative journey with us as we prioritize the
            well-being of nurses and essential workers. Enjoy exceptional
            benefits, including higher pay, flexible schedules, dental and
            health insurance, and more!
          </p>
          <section>
            <ApplyNowButton />
            <PhoneNumberButton />
          </section>
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
        <h2>Meet Our Team</h2>
        <Row xs="1" sm="2" md="4" className="g-4 d-flex justify-content-around">
          <EmployeeCard
            img={justine}
            name="Justine Acuña"
            role="CEO"
            description="Justine Acuna, the CEO of VitaliStaffing, has fulfilled her passion for equality and care by opening her own nursing agency. With Justine at the helm, VitaliStaffing embodies a commitment to exceptional healthcare and a nurturing environment that sets it apart in the industry."
          />

          <EmployeeCard
            img={raquel}
            name="Raquel Heck"
            role="COO"
            description="Raquel Heck, COO of the organization, is the driving force behind the seamless operations and team success at VitaliStaffing. With her exceptional leadership, she ensures that every aspect runs smoothly, paving the way for the agency's continued excellence."
          />

          <EmployeeCard
            img={anton}
            name="Anton Arellano"
            role="Financial Analyst"
            description="Anton Arellano, our adept Financial Analyst, is an integral part of VitaliStaffing, providing essential updates on payroll, profits, and cost-cutting strategies. His expertise enables us to make informed decisions that optimize our financial performance and drive growth, ensuring a prosperous future for our organization."
          />
        </Row>
      </Container>

      {/* Section 2: group phoyo */}
      {/* <Container className="my-5 grpPhoto"></Container> */}

      {/* section 3: problem with other agencies and hospitals */}
      <Container className="my-5">
        <Row>
          <Col md={7} className="prblms">
            <h2>Our Difference, Your Advantage</h2>
            <p className="mb-4">
              {" "}
              {/* Adjusted bottom margin */}
              In the vast sea of medical staffing, many agencies prioritize
              bottom lines over genuine care. They often leave nurses feeling
              undervalued and overworked. This approach doesn't just harm
              healthcare professionals, but it also impacts the quality of
              patient care. At Vitalis Staffing, we've flipped the script. We
              believe in putting our nurses first, knowing that their well-being
              translates to unparalleled patient care. With us, you're not just
              another number; you're family.
            </p>
          </Col>
          <Col md={5} className="prblms prblms-content">
            <img
              src={familyOfNurse}
              className="img-fluid prblms"
              alt="Family of Nurses"
            />{" "}
            {/* img-fluid makes the image responsive */}
          </Col>
        </Row>
      </Container>

      <Container className="mt-md-5 my-5">
        <Row>
          <Col md={5} className="prblms prblms-content">
            <img src={callMe} className=" shadow-sm" alt="Call us" />
          </Col>
          <Col md={7} className="prblms text-center">
            <h2 className="font-weight-bold my-4">
              Want to chat and learn more?
            </h2>
            <p className="text-muted mb-4">
              Give us a call and we would be delighted to answer all your
              questions and concerns.
            </p>
            <Row className="justify-content-center">
              <PhoneNumberButton className="btn-primary" />
            </Row>
          </Col>
        </Row>
      </Container>

      <BottomBox />
    </div>
  );
}
