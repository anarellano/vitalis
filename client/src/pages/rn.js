import React from "react";
import { Container, Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";

function RN() {
  return (
    <Container>
      <h1>Registered Nurse (RN) Requirements</h1>
      <Col>
        <h2>Requirements:</h2>
        <ul>
          <li>License/Certificate (RN)</li>
          <li>CPR</li>
          <li>Background Check: IOG, NSO, SAM, Midi-cal</li>
          <li>Physical/Medical (Valid within 1 year)</li>
          <li>TB test (valid for one year): CXR or QuantiFERON</li>
          <li>COVID Vaccine Info</li>
          <li>Vaccine: Flu</li>
          <li>N-95 Test Info</li>
          <li>
            Training/In-service Info: Abuse Sexual Harassment, Dementia,
            Infection control
          </li>
        </ul>
      </Col>
      <Row>
        <Link to='/src/FillOutForm'>
          <Button color="primary" size="lg">
            Start your Application Proccess Now!
          </Button>
        </Link>
      </Row>
      <Col>
        <h2>Benefits:</h2>
        <ul>
          <li>Pay: $75 per hour</li>
          <li>Full-time position: 32 hours per week or 128 hours per month</li>
          <li>Full-time monthly bonus: $500 upon completing required hours</li>
          <li>Flexible scheduling</li>
          <li>Opportunity to pick up additional shifts</li>
          <li>Health and dental insurance</li>
          <li>Professional development opportunities</li>
        </ul>
      </Col>
    </Container>
  );
}

export default RN;
