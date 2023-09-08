import React from "react";
import { Container, Col, } from "reactstrap";

function LVN() {
  return (
    <Container>
      <div>
        <Col>
          <h1>Licensed Vocational Nurse (LVN) Requirements</h1>
          <h2>Requirements:</h2>
          <ul>
            <li>License/Certificate (LVN)</li>
            <li>CPR</li>
            <li>Background Check: IOG, NSO, SAM, Medi-cal</li>
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
            <li>Pay: $50 per hour</li>
            <li>
              Full-time position: 32 hours per week or 128 hours per month
            </li>
            <li>
              Full-time monthly bonus: $500 upon completing required hours
            </li>
            <li>Flexible scheduling</li>
            <li>Opportunity to pick up additional shifts</li>
            <li>Health and dental insurance</li>
            <li>Career advancement opportunities</li>
          </ul>
        </Col>
      </div>
    </Container>
  );
}

export default LVN;
