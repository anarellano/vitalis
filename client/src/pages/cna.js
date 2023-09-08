import React from "react";
import { Container, Col, } from "reactstrap";

function CNA() {
  return (
    <Container>
      <div>
        <Col>
          <h1>Certified Nurse Assistant (CNA) Requirements</h1>
          <h2>Requirements:</h2>
          <ul>
            <li>License/Certificate (CNA)</li>
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

        <Col>
          <h2>Benefits:</h2>
          <ul>
            <li>Pay: $27 per hour on weekdays, $30 per hour on weekends</li>
            <li>Flexible scheduling</li>
            <li>Opportunity to pick up additional shifts</li>
            <li>Health and dental insurance</li>
            <li>Training and career development programs</li>
            <li>Employee assistance program</li>
          </ul>
        </Col>
      </div>
    </Container>
  );
}

export default CNA;
